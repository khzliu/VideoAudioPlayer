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
@Table(name = "voicetype")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Voicetype.findAll", query = "SELECT v FROM Voicetype v"),
    @NamedQuery(name = "Voicetype.findById", query = "SELECT v FROM Voicetype v WHERE v.id = :id"),
    @NamedQuery(name = "Voicetype.findByTypeName", query = "SELECT v FROM Voicetype v WHERE v.typeName = :typeName"),
    @NamedQuery(name = "Voicetype.findByViewMode", query = "SELECT v FROM Voicetype v WHERE v.viewMode = :viewMode"),
    @NamedQuery(name = "Voicetype.findByFileNum", query = "SELECT v FROM Voicetype v WHERE v.fileNum = :fileNum")})
public class Voicetype implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id")
    private Long id;
    @Basic(optional = false)
    @Column(name = "type_name")
    private String typeName;
    @Basic(optional = false)
    @Column(name = "view_mode")
    private long viewMode;
    @Basic(optional = false)
    @Column(name = "file_num")
    private long fileNum;

    public Voicetype() {
    }

    public Voicetype(Long id) {
        this.id = id;
    }

    public Voicetype(Long id, String typeName, long viewMode, long fileNum) {
        this.id = id;
        this.typeName = typeName;
        this.viewMode = viewMode;
        this.fileNum = fileNum;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public long getViewMode() {
        return viewMode;
    }

    public void setViewMode(long viewMode) {
        this.viewMode = viewMode;
    }

    public long getFileNum() {
        return fileNum;
    }

    public void setFileNum(long fileNum) {
        this.fileNum = fileNum;
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
        if (!(object instanceof Voicetype)) {
            return false;
        }
        Voicetype other = (Voicetype) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.Voicetype[ id=" + id + " ]";
    }
    
}
