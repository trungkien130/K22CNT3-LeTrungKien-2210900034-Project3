package dbo;

import java.util.Date;

public class LTK_KhachHang {
    private int LTK_MaKH;

    public int getLTK_MaKH() {
        return LTK_MaKH;
    }

    public void setLTK_MaKH(int LTK_MaKH) {
        this.LTK_MaKH = LTK_MaKH;
    }

    public String getLTK_Email() {
        return LTK_Email;
    }

    public void setLTK_Email(String LTK_Email) {
        this.LTK_Email = LTK_Email;
    }

    public String getLTK_HoTen() {
        return LTK_HoTen;
    }

    public void setLTK_HoTen(String LTK_HoTen) {
        this.LTK_HoTen = LTK_HoTen;
    }

    public String getLTK_DiaChi() {
        return LTK_DiaChi;
    }

    public void setLTK_DiaChi(String LTK_DiaChi) {
        this.LTK_DiaChi = LTK_DiaChi;
    }

    public Date getLTK_NgayTao() {
        return LTK_NgayTao;
    }

    public void setLTK_NgayTao(Date LTK_NgayTao) {
        this.LTK_NgayTao = LTK_NgayTao;
    }

    public int getLTK_SoDienThoai() {
        return LTK_SoDienThoai;
    }

    public void setLTK_SoDienThoai(int LTK_SoDienThoai) {
        this.LTK_SoDienThoai = LTK_SoDienThoai;
    }

    public Date getLTK_NgaySinh() {
        return LTK_NgaySinh;
    }

    public void setLTK_NgaySinh(Date LTK_NgaySinh) {
        this.LTK_NgaySinh = LTK_NgaySinh;
    }

    public Boolean getLTK_GioiTinh() {
        return LTK_GioiTinh;
    }

    public void setLTK_GioiTinh(Boolean LTK_GioiTinh) {
        this.LTK_GioiTinh = LTK_GioiTinh;
    }

    public Boolean getLTK_TrangThai() {
        return LTK_TrangThai;
    }

    public void setLTK_TrangThai(Boolean LTK_TrangThai) {
        this.LTK_TrangThai = LTK_TrangThai;
    }

    private String LTK_HoTen;
    private String LTK_Email;
    private int LTK_SoDienThoai;
    private String LTK_DiaChi;
    private Date LTK_NgayTao;
    private Date LTK_NgaySinh;
    private Boolean LTK_GioiTinh;
    private Boolean LTK_TrangThai;

    @Override
    public String toString() {
        return "LTK_KhachHang{" +
                "LTK_MaKH=" + LTK_MaKH +
                ", LTK_HoTen='" + LTK_HoTen + '\'' +
                ", LTK_Email='" + LTK_Email + '\'' +
                ", LTK_SoDienThoai=" + LTK_SoDienThoai +
                ", LTK_DiaChi='" + LTK_DiaChi + '\'' +
                ", LTK_NgayTao=" + LTK_NgayTao +
                ", LTK_NgaySinh=" + LTK_NgaySinh +
                ", LTK_GioiTinh=" + LTK_GioiTinh +
                ", LTK_TrangThai=" + LTK_TrangThai +
                '}';
    }
}
