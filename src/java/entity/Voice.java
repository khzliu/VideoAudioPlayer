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
@Table(name = "voice")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Voice.findAll", query = "SELECT v FROM Voice v"),
    @NamedQuery(name = "Voice.findById", query = "SELECT v FROM Voice v WHERE v.id = :id"),
    @NamedQuery(name = "Voice.findByType", query = "SELECT v FROM Voice v WHERE v.type = :type"),
    @NamedQuery(name = "Voice.findByName", query = "SELECT v FROM Voice v WHERE v.name = :name"),
    @NamedQuery(name = "Voice.findByDuration", query = "SELECT v FROM Voice v WHERE v.duration = :duration"),
    @NamedQuery(name = "Voice.findByClicks", query = "SELECT v FROM Voice v WHERE v.clicks = :clicks"),
    @NamedQuery(name = "Voice.findByDescription", query = "SELECT v FROM Voice v WHERE v.description = :description"),
    @NamedQuery(name = "Voice.findByActor", query = "SELECT v FROM Voice v WHERE v.actor = :actor"),
    @NamedQuery(name = "Voice.findByPriase", query = "SELECT v FROM Voice v WHERE v.priase = :priase"),
    @NamedQuery(name = "Voice.findByIsfile", query = "SELECT v FROM Voice v WHERE v.isfile = :isfile")})
public class Voice implements Serializable {
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

    public Voice() {
    }

    public Voice(Long id) {
        this.id = id;
    }

    public Voice(Long id, String type, String name, String duration, long clicks, long priase, long isfile) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.duration = duration;
        this.clicks = clicks;
        this.priase = priase;
        this.isfile = isfile;
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

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Voice)) {
            return false;
        }
        Voice other = (Voice) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.Voice[ id=" + id + " ]";
    }
    
}
