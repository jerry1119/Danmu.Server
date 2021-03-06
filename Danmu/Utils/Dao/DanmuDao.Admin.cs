using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Danmu.Model.DataTable;
using Danmu.Model.WebResult;
using Microsoft.EntityFrameworkCore;

namespace Danmu.Utils.Dao
{
    public partial class DanmuDao
    {
        /// <summary>
        ///     获取全部弹幕的数量
        /// </summary>
        /// <returns></returns>
        public async Task<int> GetAllDanmuAsync()
        {
            return await _con.Danmu.CountAsync();
        }

        /// <summary>
        ///     分页查询全部弹幕
        /// </summary>
        /// <param name="page"></param>
        /// <param name="size"></param>
        /// <param name="descending"></param>
        /// <returns></returns>
        public async Task<DanmuTable[]> GetAllDanmuAsync(int page, int size, bool descending = true)
        {
            var allDanmu = _con.Danmu.AsNoTracking();
            var order = descending
                    ? allDanmu.OrderByDescending(b => b.CreateTime)
                    : allDanmu.OrderBy(b => b.CreateTime);
            return await order.Skip(size * (page - 1)).Take(size).ToArrayAsync();
        }

        /// <summary>
        ///     通过id获取相应的弹幕
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<DanmuTable> QueryDanmuByIdAsync(string id)
        {
            if (Guid.TryParse(id, out var guid))
                return await _con.Danmu.AsNoTracking().Where(e => e.Id.Equals(guid)).Include(e => e.Video)
                                 .FirstOrDefaultAsync();
            return new DanmuTable();
        }

        /// <summary>
        ///     编辑弹幕
        /// </summary>
        /// <param name="id"></param>
        /// <param name="time"></param>
        /// <param name="mode"></param>
        /// <param name="color"></param>
        /// <param name="text"></param>
        /// <param name="isDelete"></param>
        /// <returns></returns>
        public async Task<DanmuTable> EditDanmuAsync(Guid id, float? time, int? mode, int? color, string text,
                                                     bool? isDelete)
        {
            var dataBase = await _con.Danmu.Where(e => e.Id.Equals(id)).FirstOrDefaultAsync();
            dataBase.Data.Time = time ?? dataBase.Data.Time;
            dataBase.Data.Mode = mode ?? dataBase.Data.Mode;
            dataBase.Data.Color = color ?? dataBase.Data.Color;
            dataBase.Data.Text = text ?? dataBase.Data.Text;
            dataBase.IsDelete = isDelete ?? dataBase.IsDelete;
            dataBase.UpdateTime = DateTime.UtcNow;
            _con.Update(dataBase);
            if (await _con.SaveChangesAsync() > 0) return dataBase;
            return null;
        }

        /// <summary>
        ///     删除弹幕
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<bool> DeleteDanmuAsync(string id)
        {
            if (Guid.TryParse(id, out var guid))
            {
                var dataBase = await _con.Danmu.Where(e => e.Id == guid).FirstOrDefaultAsync();
                dataBase.UpdateTime = DateTime.UtcNow;
                dataBase.IsDelete = true;
                _con.Danmu.Update(dataBase);
                return await _con.SaveChangesAsync() > 0;
            }

            return false;
        }

        /// <summary>
        ///     通过vid查询到的弹幕总数
        /// </summary>
        /// <param name="vid"></param>
        /// <returns></returns>
        public async Task<int> GetDanmuByVidAsync(string vid)
        {
            return await _con.Danmu.AsNoTracking().Where(e => e.Vid.Equals(vid)).CountAsync();
        }

        /// <summary>
        ///     通过vid查询弹幕表
        /// </summary>
        /// <param name="vid"></param>
        /// <param name="size"></param>
        /// <param name="descending"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        public async Task<DanmuTable[]> GetDanmuByVidAsync(string vid, int page, int size,
                                                           bool descending = true)
        {
            var allDanmu = _con.Danmu.AsNoTracking().Where(e => e.Vid.Equals(vid));
            var order = descending
                    ? allDanmu.OrderByDescending(b => b.CreateTime)
                    : allDanmu.OrderBy(b => b.CreateTime);
            return await order.Skip(size * (page - 1)).Take(size).ToArrayAsync();
        }

        /// <summary>
        ///     时间检索
        /// </summary>
        /// <param name="page"></param>
        /// <param name="size"></param>
        /// <param name="startDate"></param>
        /// <param name="endDate"></param>
        /// <param name="descending"></param>
        /// <returns></returns>
        public async Task<DanmuList<DanmuTable>> DateSelectAsync(int page = 1, int size = 30, string startDate = null,
                                                                 string endDate = null, bool descending = true)
        {
            DateTime sDate = DateTime.TryParse(startDate, out sDate) ? sDate : DateTime.MinValue;
            DateTime eDate = DateTime.TryParse(endDate, out eDate) ? eDate : DateTime.MaxValue;
            var a = _con.Danmu.AsNoTracking().Where(d =>
                    (string.IsNullOrEmpty(startDate) || DateTime.Compare(sDate, d.CreateTime) < 0) &&
                    (string.IsNullOrEmpty(endDate) || DateTime.Compare(eDate, d.CreateTime) > 0));
            a = descending ? a.OrderByDescending(b => b.UpdateTime) : a.OrderBy(b => b.UpdateTime);
            var c = a.Skip(size * (page - 1)).Take(size);

            return new DanmuList<DanmuTable>
            {
                Total = await a.CountAsync(),
                List = await c.ToArrayAsync()
            };
        }

        /// <summary>
        ///     复杂检索
        /// </summary>
        /// <param name="page"></param>
        /// <param name="size"></param>
        /// <param name="vid"></param>
        /// <param name="author"></param>
        /// <param name="authorId"></param>
        /// <param name="startDate"></param>
        /// <param name="endDate"></param>
        /// <param name="mode"></param>
        /// <param name="ip"></param>
        /// <param name="key"></param>
        /// <param name="descending"></param>
        /// <returns></returns>
        public async Task<DanmuList<DanmuTable>> DanmuBasesSelectAsync(int page, int size, string vid, string author,
                                                                       int authorId,
                                                                       string startDate,
                                                                       string endDate, int mode, string ip,
                                                                       string key, bool descending = true)
        {
            IPAddress dip;
            DateTime sDate = DateTime.TryParse(startDate, out sDate) ? sDate : DateTime.MinValue;
            DateTime eDate = DateTime.TryParse(endDate, out eDate) ? eDate : DateTime.MaxValue;
            var a = _con.Danmu.AsNoTracking().Where(d =>
                    (mode >= 100 || d.Data.Mode.Equals(mode)) &&
                    (string.IsNullOrEmpty(ip) || !IPAddress.TryParse(ip, out dip) || d.Ip.Equals(dip)) &&
                    (string.IsNullOrEmpty(startDate) || DateTime.Compare(sDate, d.CreateTime) < 0) &&
                    (string.IsNullOrEmpty(endDate) || DateTime.Compare(eDate, d.CreateTime) > 0) &&
                    (string.IsNullOrEmpty(vid) || d.Vid.Contains(vid)) &&
                    (string.IsNullOrEmpty(author) || d.Data.Author.Contains(author)) &&
                    (authorId < 0 || d.Data.AuthorId.Equals(authorId)) &&
                    (string.IsNullOrEmpty(key) || d.Data.Text.Contains(key)));
            a = descending ? a.OrderByDescending(b => b.UpdateTime) : a.OrderBy(b => b.UpdateTime);
            var c = a.Skip(size * (page - 1)).Take(size);

            return new DanmuList<DanmuTable>
            {
                Total = await a.CountAsync(),
                List = await c.ToArrayAsync()
            };
        }
    }
}
