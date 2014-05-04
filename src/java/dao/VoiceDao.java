/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import entity.Voice;
import java.util.List;
import org.springframework.stereotype.Repository;

/**
 *
 * @author liu.huazhou <khzliu@163.com>
 */
@Repository
public class VoiceDao extends BaseDao<Voice>{
    protected final String GET_PAGED_VOICE_BY_TYPE = "from Voice where type=?";
    protected final String GET_VOICE_BY_TYPE = "from Voice where type=?";
    private final String GET_PAGED_VOICE_BY_ID = "from Voice where id = ?";
    private final String GET_PAGED_VOICE_BY_ID_AND_TYPE = "from Voice where id = ? and type=?";
	
    /**
    * 分页查询对象
    * 
    * @param type Voice的类型
    */
   public Page getPagedVoiceByType(String type, int pageNo, int pageSize) {
           return pagedQuery(GET_PAGED_VOICE_BY_TYPE, pageNo, pageSize, type);
   }

   public Page getPagedVoiceByIdAndType(Long id, int pageNo, int pageSize,String type) {
           return pagedQuery(GET_PAGED_VOICE_BY_ID_AND_TYPE, pageNo, pageSize, id, type);
   }


   public List getAllVoiceByType(String type) {
           return find(GET_VOICE_BY_TYPE, type);
   }
    
}
