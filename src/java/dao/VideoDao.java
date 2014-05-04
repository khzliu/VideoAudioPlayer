/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;


import java.util.List;

import org.springframework.stereotype.Repository;

import entity.Video;
/**
 *
 * @author liu.huazhou <khzliu@163.com>
 */
@Repository
public class VideoDao extends BaseDao<Video>{
    protected final String GET_PAGED_VIDEOS_BY_TYPE = "from Video where type=?";
    protected final String GET_VIDEOS_BY_TYPE = "from Video where type=?";
    private final String GET_VIDEO_BY_ID = "from Video where id = ?";
    private final String GET_PAGED_VIDEOS_BY_ID_AND_TYPE = "from Video where id = ? and type=?";
	
    /**
	 * 分页查询对象
	 * 
	 * @param type Video的类型
	 */
	public Page getPagedVideoByType(String type, int pageNo, int pageSize) {
		return pagedQuery(GET_PAGED_VIDEOS_BY_TYPE, pageNo, pageSize, type);
	}
        
        public Page getPagedVideoByIdAndType(Long id, int pageNo, int pageSize,String type) {
		return pagedQuery(GET_PAGED_VIDEOS_BY_ID_AND_TYPE, pageNo, pageSize, id, type);
	}
        

	public List getAllVideoByType(String type) {
		return find(GET_VIDEOS_BY_TYPE, type);
	}
    
}
