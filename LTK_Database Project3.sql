USE [LTK_QLCHThoiTrangTreEm]
GO
/****** Object:  User [LTK_2210900034]    Script Date: 3/13/2025 12:49:37 AM ******/
CREATE USER [LTK_2210900034] FOR LOGIN [LTK_2210900034] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [LTK_2210900034]
GO
/****** Object:  Table [dbo].[LTK_ChiTietHoaDon]    Script Date: 3/13/2025 12:49:37 AM ******/
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
/****** Object:  Table [dbo].[ltk_hoa_don]    Script Date: 3/13/2025 12:49:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ltk_hoa_don](
	[mahd] [int] IDENTITY(1,1) NOT NULL,
	[makh] [int] NULL,
	[ngay_lap] [date] NULL,
	[tong_tien] [numeric](38, 2) NOT NULL,
	[trang_thai] [varchar](255) NULL,
 CONSTRAINT [PK__ltk_hoa___7A2100DE7147577E] PRIMARY KEY CLUSTERED 
(
	[mahd] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ltk_khach_hang]    Script Date: 3/13/2025 12:49:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ltk_khach_hang](
	[ltk_makh] [int] IDENTITY(1,1) NOT NULL,
	[ltk_dia_chi] [nvarchar](255) NULL,
	[ltk_email] [nvarchar](255) NULL,
	[ltk_gioi_tinh] [bit] NULL,
	[ltk_ho_ten] [nvarchar](255) NOT NULL,
	[ltk_ngay_sinh] [date] NULL,
	[ltk_ngay_tao] [date] NULL,
	[ltk_so_dien_thoai] [varchar](255) NULL,
	[ltk_trang_thai] [bit] NULL,
	[ltk_mat_khau] [varchar](255) NULL,
	[ltk_role] [bit] NULL,
	[ltk_ngaysinh] [date] NULL,
	[ltk_ngaytao] [date] NULL,
 CONSTRAINT [PK__ltk_khac__0DA2D608AE08D914] PRIMARY KEY CLUSTERED 
(
	[ltk_makh] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LTK_Kho]    Script Date: 3/13/2025 12:49:37 AM ******/
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
/****** Object:  Table [dbo].[ltk_khuyen_mai]    Script Date: 3/13/2025 12:49:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ltk_khuyen_mai](
	[makm] [int] IDENTITY(1,1) NOT NULL,
	[ngay_bat_dau] [date] NOT NULL,
	[ngay_ket_thuc] [date] NOT NULL,
	[phan_tram_giam] [int] NOT NULL,
	[tenkm] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK__ltk_khuy__7A21BB47096D3E91] PRIMARY KEY CLUSTERED 
(
	[makm] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ltk_nha_cung_cap]    Script Date: 3/13/2025 12:49:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ltk_nha_cung_cap](
	[mancc] [int] IDENTITY(1,1) NOT NULL,
	[dia_chi] [nvarchar](255) NULL,
	[email] [nvarchar](255) NOT NULL,
	[so_dien_thoai] [nvarchar](255) NOT NULL,
	[tenncc] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK__ltk_nha___0A7AC4358B4D46E5] PRIMARY KEY CLUSTERED 
(
	[mancc] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ltk_san_pham]    Script Date: 3/13/2025 12:49:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ltk_san_pham](
	[masp] [int] IDENTITY(1,1) NOT NULL,
	[gia] [numeric](38, 2) NOT NULL,
	[hinh_anh] [varchar](255) NULL,
	[makm] [int] NULL,
	[ma_kho] [int] NULL,
	[mancc] [int] NULL,
	[mo_ta] [nvarchar](255) NULL,
	[so_luong_ton] [int] NOT NULL,
	[tensp] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK__ltk_san___7A21767235B87EB4] PRIMARY KEY CLUSTERED 
(
	[masp] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ltk_khach_hang] ON 

INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (85, N'Hà Nội', N'nguyenvana@gmail.com', 1, N'Nguyễn Văn C', NULL, NULL, N'0123456789', 0, N'123456', 0, CAST(N'1989-12-31' AS Date), NULL)
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (92, N'ha dong', N'123456@gmail.com', 1, N'123', NULL, NULL, N'231', 0, NULL, 0, CAST(N'2025-03-14' AS Date), NULL)
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (93, N'ha dong', N'123456@gmail.com', 0, N'123', NULL, NULL, N'231', 0, NULL, 0, CAST(N'2025-03-11' AS Date), NULL)
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (94, N'ha dong', N'123456@gmail.com', 1, N'123', NULL, NULL, N'231', 1, NULL, 0, CAST(N'2025-03-27' AS Date), NULL)
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (97, N'ha dong', N'123456@gmail.com', 0, N'123', NULL, NULL, N'231', 0, NULL, 0, CAST(N'2025-04-03' AS Date), NULL)
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (102, N'dsa', N'kienlee155@gmail.com', 0, N'Kien', NULL, NULL, N'913088169', 0, N'$2a$10$bKxbdu3cmTzUza7RJVdBwe1FMW1cArlGeJ9JkvG3nLnXIP0StLT.O', 0, CAST(N'2025-03-11' AS Date), CAST(N'2025-03-08' AS Date))
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (103, N'', N'kienlee14@gmail.com', 0, N'Kien', NULL, NULL, N'913088169', 0, N'$2a$10$6sRnWjOLMlQEmWVgORkvQ.n/Qx.4lYMEkHC16jz.F39o8zRpbWmjC', 0, NULL, CAST(N'2025-03-08' AS Date))
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (104, N'', N'luc@gmail.com', 0, N'kien', NULL, NULL, N'913088169', 0, N'$2a$10$yR6/MSLXeHCUmeH0Ruxoju7mjqv5YieGB4W1tXSj5SM9MDFykvqXa', 0, NULL, CAST(N'2025-03-08' AS Date))
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (105, N'hà nội', N'luc22@gmail.com', 1, N'Lực', NULL, NULL, N'12312', 0, N'$2a$10$DjwTDGEQk843GQJwDhmgpuBGMgtdu7VEtaQAdTesJdCYmV68.e942', 0, CAST(N'2004-12-02' AS Date), CAST(N'2025-03-11' AS Date))
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (106, N'hà nội', N'12345632321@gmail.com', 1, N'Lực', NULL, NULL, N'12312', 0, N'$2a$10$52TaG/pTdtolW1vTUcOhDO2FM7mPshI1rSUdxYmufVOxmT54N7KXC', 0, CAST(N'2025-03-03' AS Date), CAST(N'2025-03-11' AS Date))
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (107, NULL, N'kienlee190@gmail.com', NULL, N'Trung Kiên', NULL, NULL, N'913088169', 1, N'$2a$10$Yw4IVBIxHVpurr6b4NZrQea6EfvDtd9ODTWHAzCC8SKMR1vfuYm3a', 0, NULL, CAST(N'2025-03-12' AS Date))
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (108, N'', N'Admin@gmail.com', 1, N'Admin', NULL, NULL, N'913088169', 1, N'$2a$10$.ddvn2THbcN8jaZV1MCMbO7fGISbledHpRoTv7NJexugjGnK51ePK', 1, NULL, CAST(N'2025-03-12' AS Date))
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (109, NULL, N'luc2@gmail.com', NULL, N'Trung Kiên', NULL, NULL, N'913088169', 1, N'$2a$10$Q8Teg8BlDTJOw3KxmqHf6OUlN9nCfvc4rh3xzVugtc5cRmEPnt/wO', 0, NULL, CAST(N'2025-03-12' AS Date))
INSERT [dbo].[ltk_khach_hang] ([ltk_makh], [ltk_dia_chi], [ltk_email], [ltk_gioi_tinh], [ltk_ho_ten], [ltk_ngay_sinh], [ltk_ngay_tao], [ltk_so_dien_thoai], [ltk_trang_thai], [ltk_mat_khau], [ltk_role], [ltk_ngaysinh], [ltk_ngaytao]) VALUES (110, N'hà nội', N'kienlee122@gmail.com', 1, N'Trung Kiên', NULL, NULL, N'0913088169', 1, N'$2a$10$eW7kZOgPHznSPwT2dOnNT.FJW/qOcXSLQoY5o0eEVu29Ey6/8a9/y', 1, CAST(N'2222-12-02' AS Date), CAST(N'2025-03-12' AS Date))
SET IDENTITY_INSERT [dbo].[ltk_khach_hang] OFF
GO
SET IDENTITY_INSERT [dbo].[ltk_san_pham] ON 

INSERT [dbo].[ltk_san_pham] ([masp], [gia], [hinh_anh], [makm], [ma_kho], [mancc], [mo_ta], [so_luong_ton], [tensp]) VALUES (3, CAST(100000.00 AS Numeric(38, 2)), N'https://bizweb.dktcdn.net/100/447/374/products/z5559646706836-693f212801f574826d9fdea3f57cccfa-1741338033868.jpg?v=1741338039207', 200, 1, 20, N'Nội dung đang cập nhật...', 20, N'Bộ cộc tay mùa hè trẻ em, vải cotton cao cấp, hình popcorn, hình quả chuối size 4/16 tuổi')
INSERT [dbo].[ltk_san_pham] ([masp], [gia], [hinh_anh], [makm], [ma_kho], [mancc], [mo_ta], [so_luong_ton], [tensp]) VALUES (7, CAST(100000.00 AS Numeric(38, 2)), NULL, 200, 1, 20, N'22', 20, N'Quần')
INSERT [dbo].[ltk_san_pham] ([masp], [gia], [hinh_anh], [makm], [ma_kho], [mancc], [mo_ta], [so_luong_ton], [tensp]) VALUES (8, CAST(50000.00 AS Numeric(38, 2)), NULL, 90, 2, 8, N'11', 255, N'Áo')
INSERT [dbo].[ltk_san_pham] ([masp], [gia], [hinh_anh], [makm], [ma_kho], [mancc], [mo_ta], [so_luong_ton], [tensp]) VALUES (9, CAST(50000.00 AS Numeric(38, 2)), NULL, 90, 2, 8, N'11', 255, N'Áo')
INSERT [dbo].[ltk_san_pham] ([masp], [gia], [hinh_anh], [makm], [ma_kho], [mancc], [mo_ta], [so_luong_ton], [tensp]) VALUES (10, CAST(50000.00 AS Numeric(38, 2)), N'e', 90, 2, 8, N'11', 255, N'Áo')
INSERT [dbo].[ltk_san_pham] ([masp], [gia], [hinh_anh], [makm], [ma_kho], [mancc], [mo_ta], [so_luong_ton], [tensp]) VALUES (11, CAST(50000.00 AS Numeric(38, 2)), N'e', 90, 2, 8, N'11', 255, N's')
SET IDENTITY_INSERT [dbo].[ltk_san_pham] OFF
GO
ALTER TABLE [dbo].[LTK_Kho] ADD  DEFAULT ((0)) FOR [LTK_SoLuongTon]
GO
ALTER TABLE [dbo].[ltk_hoa_don]  WITH CHECK ADD  CONSTRAINT [fk_hoa_don_khach_hang] FOREIGN KEY([makh])
REFERENCES [dbo].[ltk_khach_hang] ([ltk_makh])
ON UPDATE CASCADE
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[ltk_hoa_don] CHECK CONSTRAINT [fk_hoa_don_khach_hang]
GO
