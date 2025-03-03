USE [LTK_QLCHThoiTrangTreEm]
GO
/****** Object:  User [LTK_2210900034]    Script Date: 2/28/2025 11:06:07 PM ******/
CREATE USER [LTK_2210900034] FOR LOGIN [LTK_2210900034] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [LTK_2210900034]
GO
/****** Object:  Table [dbo].[LTK_ChiTietHoaDon]    Script Date: 2/28/2025 11:06:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LTK_ChiTietHoaDon](
	[LTK_MaCTHD] [int] IDENTITY(1,1) NOT NULL,
	[LTK_MaHD] [int] NULL,
	[LTK_MaSP] [int] NULL,
	[LTK_SoLuong] [int] NOT NULL,
	[LTK_GiaBan] [decimal](10, 2) NOT NULL,
	[LTK_ThanhTien]  AS ([LTK_SoLuong]*[LTK_GiaBan]) PERSISTED,
 CONSTRAINT [PK__LTK_ChiT__1E4FA7719F2699F1] PRIMARY KEY CLUSTERED 
(
	[LTK_MaCTHD] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LTK_HoaDon]    Script Date: 2/28/2025 11:06:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LTK_HoaDon](
	[LTK_MaHD] [int] IDENTITY(1,1) NOT NULL,
	[LTK_MaKH] [int] NULL,
	[LTK_NgayLap] [date] NULL,
	[LTK_TongTien] [decimal](10, 2) NOT NULL,
	[LTK_TrangThai] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[LTK_MaHD] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LTK_KhachHang]    Script Date: 2/28/2025 11:06:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LTK_KhachHang](
	[LTK_MaKH] [int] IDENTITY(1,1) NOT NULL,
	[LTK_HoTen] [nvarchar](100) NOT NULL,
	[LTK_Email] [nvarchar](100) NULL,
	[LTK_SoDienThoai] [int] NOT NULL,
	[LTK_DiaChi] [nvarchar](250) NULL,
	[LTK_NgayTao] [date] NULL,
	[LTK_NgaySinh] [date] NULL,
	[LTK_GioiTinh] [bit] NULL,
	[LTK_TrangThai] [bit] NULL,
 CONSTRAINT [PK__LTK_Khac__2725CF1ECDF7E0A2] PRIMARY KEY CLUSTERED 
(
	[LTK_MaKH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LTK_Kho]    Script Date: 2/28/2025 11:06:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LTK_Kho](
	[LTK_MaKho] [int] IDENTITY(1,1) NOT NULL,
	[LTK_LoaiSanPham] [nvarchar](255) NOT NULL,
	[LTK_SoLuongTon] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[LTK_MaKho] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LTK_KhuyenMai]    Script Date: 2/28/2025 11:06:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LTK_KhuyenMai](
	[LTK_MaKM] [int] IDENTITY(1,1) NOT NULL,
	[LTK_TenKM] [nvarchar](255) NOT NULL,
	[LTK_PhanTramGiam] [int] NOT NULL,
	[LTK_NgayBatDau] [date] NOT NULL,
	[LTK_NgayKetThuc] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[LTK_MaKM] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LTK_NhaCungCap]    Script Date: 2/28/2025 11:06:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LTK_NhaCungCap](
	[LTK_MaNCC] [int] IDENTITY(1,1) NOT NULL,
	[LTK_TenNCC] [nvarchar](255) NOT NULL,
	[LTK_DiaChi] [nvarchar](255) NULL,
	[LTK_SoDienThoai] [nvarchar](15) NOT NULL,
	[LTK_Email] [nvarchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[LTK_MaNCC] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LTK_SanPham]    Script Date: 2/28/2025 11:06:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LTK_SanPham](
	[LTK_MaSP] [int] IDENTITY(1,1) NOT NULL,
	[LTK_TenSP] [nvarchar](255) NOT NULL,
	[LTK_MoTa] [nvarchar](max) NULL,
	[LTK_Gia] [decimal](10, 2) NOT NULL,
	[LTK_SoLuongTon] [int] NOT NULL,
	[LTK_MaKho] [int] NULL,
	[LTK_MaNCC] [int] NULL,
	[LTK_MaKM] [int] NULL,
	[LTK_HinhAnh] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[LTK_MaSP] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[LTK_KhachHang] ON 

INSERT [dbo].[LTK_KhachHang] ([LTK_MaKH], [LTK_HoTen], [LTK_Email], [LTK_SoDienThoai], [LTK_DiaChi], [LTK_NgayTao], [LTK_NgaySinh], [LTK_GioiTinh], [LTK_TrangThai]) VALUES (1, N'TrungKien', N'kienlee14@gmail.com', 913088169, N'ha dong ha noi', CAST(N'2025-02-28' AS Date), CAST(N'2004-02-13' AS Date), 1, 1)
SET IDENTITY_INSERT [dbo].[LTK_KhachHang] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__LTK_Khac__A9D1053463208A45]    Script Date: 2/28/2025 11:06:08 PM ******/
ALTER TABLE [dbo].[LTK_KhachHang] ADD  CONSTRAINT [UQ__LTK_Khac__A9D1053463208A45] UNIQUE NONCLUSTERED 
(
	[LTK_Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__LTK_NhaC__A9D105340A15B655]    Script Date: 2/28/2025 11:06:08 PM ******/
ALTER TABLE [dbo].[LTK_NhaCungCap] ADD UNIQUE NONCLUSTERED 
(
	[LTK_Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LTK_HoaDon] ADD  DEFAULT (getdate()) FOR [LTK_NgayLap]
GO
ALTER TABLE [dbo].[LTK_HoaDon] ADD  DEFAULT ('Ch? xác nh?n') FOR [LTK_TrangThai]
GO
ALTER TABLE [dbo].[LTK_KhachHang] ADD  CONSTRAINT [DF__LTK_Khach__NgayT__70DDC3D8]  DEFAULT (getdate()) FOR [LTK_NgayTao]
GO
ALTER TABLE [dbo].[LTK_Kho] ADD  DEFAULT ((0)) FOR [LTK_SoLuongTon]
GO
ALTER TABLE [dbo].[LTK_ChiTietHoaDon]  WITH CHECK ADD  CONSTRAINT [FK_LTK_ChiTietHoaDon_LTK_HoaDon] FOREIGN KEY([LTK_MaHD])
REFERENCES [dbo].[LTK_HoaDon] ([LTK_MaHD])
GO
ALTER TABLE [dbo].[LTK_ChiTietHoaDon] CHECK CONSTRAINT [FK_LTK_ChiTietHoaDon_LTK_HoaDon]
GO
ALTER TABLE [dbo].[LTK_ChiTietHoaDon]  WITH CHECK ADD  CONSTRAINT [FK_LTK_ChiTietHoaDon_LTK_SanPham] FOREIGN KEY([LTK_MaSP])
REFERENCES [dbo].[LTK_SanPham] ([LTK_MaSP])
GO
ALTER TABLE [dbo].[LTK_ChiTietHoaDon] CHECK CONSTRAINT [FK_LTK_ChiTietHoaDon_LTK_SanPham]
GO
ALTER TABLE [dbo].[LTK_HoaDon]  WITH CHECK ADD  CONSTRAINT [FK_LTK_HoaDon_LTK_KhachHang] FOREIGN KEY([LTK_MaKH])
REFERENCES [dbo].[LTK_KhachHang] ([LTK_MaKH])
GO
ALTER TABLE [dbo].[LTK_HoaDon] CHECK CONSTRAINT [FK_LTK_HoaDon_LTK_KhachHang]
GO
ALTER TABLE [dbo].[LTK_SanPham]  WITH CHECK ADD  CONSTRAINT [FK_LTK_SanPham_LTK_Kho] FOREIGN KEY([LTK_MaKho])
REFERENCES [dbo].[LTK_Kho] ([LTK_MaKho])
GO
ALTER TABLE [dbo].[LTK_SanPham] CHECK CONSTRAINT [FK_LTK_SanPham_LTK_Kho]
GO
ALTER TABLE [dbo].[LTK_SanPham]  WITH CHECK ADD  CONSTRAINT [FK_LTK_SanPham_LTK_KhuyenMai] FOREIGN KEY([LTK_MaKM])
REFERENCES [dbo].[LTK_KhuyenMai] ([LTK_MaKM])
GO
ALTER TABLE [dbo].[LTK_SanPham] CHECK CONSTRAINT [FK_LTK_SanPham_LTK_KhuyenMai]
GO
ALTER TABLE [dbo].[LTK_SanPham]  WITH CHECK ADD  CONSTRAINT [FK_LTK_SanPham_LTK_NhaCungCap] FOREIGN KEY([LTK_MaNCC])
REFERENCES [dbo].[LTK_NhaCungCap] ([LTK_MaNCC])
GO
ALTER TABLE [dbo].[LTK_SanPham] CHECK CONSTRAINT [FK_LTK_SanPham_LTK_NhaCungCap]
GO
