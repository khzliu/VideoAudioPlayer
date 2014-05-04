/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

/**
 *
 * @author liu.huazhou <khzliu@163.com>
 */
import java.util.List;

import org.springframework.stereotype.Repository;

import entity.Videotype;

@Repository
public class VideoTypeDao extends BaseDao<Videotype> {
	protected final String GET_VIDEOTYPE = "from Videotype";

	/**
	 * 分页查询对象
	 * 
	 * @param type Video的类型
	 */
	public List getAllVideoType() {
		return find(GET_VIDEOTYPE);
	}
}

