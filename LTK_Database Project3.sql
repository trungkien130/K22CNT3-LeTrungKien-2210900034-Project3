create database QLCHThoiTrangTreEm_2210900034
use QLCHThoiTrangTreEm_2210900034

create table tSanPham_2210900034(
id_2210900034 int primary key,
tenSP_2210900034 nvarchar(200),
soLuong_2210900034 int,
loai nvarchar(200),
maCL int,
donGia float,
);

create table tKhachHang_2210900034(
id_2210900034 int primary key,
tenKH_2210900034 nvarchar(200),
ngaySinh date,
email varchar,
diaChi nvarchar(200),
sdt int,
chucVu bit
)