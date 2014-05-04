/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author liu.huazhou <khzliu@163.com>
 */
@Entity
@Table(name = "video")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Video.findAll", query = "SELECT v FROM Video v"),
    @NamedQuery(name = "Video.findById", query = "SELECT v FROM Video v WHERE v.id = :id"),
    @NamedQuery(name = "Video.findByType", query = "SELECT v FROM Video v WHERE v.type = :type"),
    @NamedQuery(name = "Video.findByName", query = "SELECT v FROM Video v WHERE v.name = :name"),
    @NamedQuery(name = "Video.findByDuration", query = "SELECT v FROM Video v WHERE v.duration = :duration"),
    @NamedQuery(name = "Video.findByClicks", query = "SELECT v FROM Video v WHERE v.clicks = :clicks"),
    @NamedQuery(name = "Video.findByDescription", query = "SELECT v FROM Video v WHERE v.description = :description"),
    @NamedQuery(name = "Video.findByActor", query = "SELECT v FROM Video v WHERE v.actor = :actor"),
    @NamedQuery(name = "Video.findByPriase", query = "SELECT v FROM Video v WHERE v.priase = :priase"),
    @NamedQuery(name = "Video.findByIsfile", query = "SELECT v FROM Video v WHERE v.isfile = :isfile"),
    @NamedQuery(name = "Video.findByScaleX", query = "SELECT v FROM Video v WHERE v.scaleX = :scaleX"),
    @NamedQuery(name = "Video.findByScaleY", query = "SELECT v FROM Video v WHERE v.scaleY = :scaleY")})
public class Video implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id")
    private Long id;
    @Basic(optional = false)
    @Column(name = "type")
    private String type;
    @Basic(optional = false)
    @Column(name = "name")
    private String name;
    @Basic(optional = false)
    @Column(name = "duration")
    private String duration;
    @Basic(optional = false)
    @Column(name = "clicks")
    private long clicks;
    @Column(name = "description")
    private String description;
    @Column(name = "actor")
    private String actor;
    @Basic(optional = false)
    @Column(name = "priase")
    private long priase;
    @Basic(optional = false)
    @Column(name = "isfile")
    private long isfile;
    @Basic(optional = false)
    @Column(name = "scale_x")
    private long scaleX;
    @Basic(optional = false)
    @Column(name = "scale_y")
    private long scaleY;

    public Video() {
    }

    public Video(Long id) {
        this.id = id;
    }

    public Video(Long id, String type, String name, String duration, long clicks, long priase, long isfile, long scaleX, long scaleY) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.duration = duration;
        this.clicks = clicks;
        this.priase = priase;
        this.isfile = isfile;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public long getClicks() {
        return clicks;
    }

    public void setClicks(long clicks) {
        this.clicks = clicks;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getActor() {
        return actor;
    }

    public void setActor(String actor) {
        this.actor = actor;
    }

    public long getPriase() {
        return priase;
    }

    public void setPriase(long priase) {
        this.priase = priase;
    }

    public long getIsfile() {
        return isfile;
    }

    public void setIsfile(long isfile) {
        this.isfile = isfile;
    }

    public long getScaleX() {
        return scaleX;
    }

    public void setScaleX(long scaleX) {
        this.scaleX = scaleX;
    }

    public long getScaleY() {
        return scaleY;
    }

    public void setScaleY(long scaleY) {
        this.scaleY = scaleY;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Video)) {
            return false;
        }
        Video other = (Video) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.Video[ id=" + id + " ]";
    }
    
}
