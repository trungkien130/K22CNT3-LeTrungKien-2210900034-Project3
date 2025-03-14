USE [LTK_QLCHThoiTrangTreEm]
GO
/****** Object:  User [LTK_2210900034]    Script Date: 3/14/2025 5:27:43 PM ******/
CREATE USER [LTK_2210900034] FOR LOGIN [LTK_2210900034] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [LTK_2210900034]
GO
/****** Object:  Table [dbo].[LTK_ChiTietHoaDon]    Script Date: 3/14/2025 5:27:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ltk_gio_hang]    Script Date: 3/14/2025 5:27:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ltk_gio_hang](
	[ma_gio_hang] [int] IDENTITY(1,1) NOT NULL,
	[ma_khach_hang] [int] NULL,
	[ma_san_pham] [int] NOT NULL,
	[so_luong] [int] NOT NULL,
	[ngay_them] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[ma_gio_hang] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ltk_hoa_don]    Script Date: 3/14/2025 5:27:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ltk_khach_hang]    Script Date: 3/14/2025 5:27:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LTK_Kho]    Script Date: 3/14/2025 5:27:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ltk_khuyen_mai]    Script Date: 3/14/2025 5:27:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ltk_nha_cung_cap]    Script Date: 3/14/2025 5:27:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ltk_san_pham]    Script Date: 3/14/2025 5:27:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ltk_gio_hang] ADD  DEFAULT (getdate()) FOR [ngay_them]
GO
ALTER TABLE [dbo].[LTK_Kho] ADD  DEFAULT ((0)) FOR [LTK_SoLuongTon]
GO
ALTER TABLE [dbo].[LTK_ChiTietHoaDon]  WITH CHECK ADD  CONSTRAINT [FK_LTK_ChiTietHoaDon_ltk_hoa_don] FOREIGN KEY([LTK_MaHD])
REFERENCES [dbo].[ltk_hoa_don] ([mahd])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[LTK_ChiTietHoaDon] CHECK CONSTRAINT [FK_LTK_ChiTietHoaDon_ltk_hoa_don]
GO
ALTER TABLE [dbo].[LTK_ChiTietHoaDon]  WITH CHECK ADD  CONSTRAINT [FK_LTK_ChiTietHoaDon_ltk_san_pham] FOREIGN KEY([LTK_MaSP])
REFERENCES [dbo].[ltk_san_pham] ([masp])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[LTK_ChiTietHoaDon] CHECK CONSTRAINT [FK_LTK_ChiTietHoaDon_ltk_san_pham]
GO
ALTER TABLE [dbo].[ltk_gio_hang]  WITH CHECK ADD  CONSTRAINT [FK_ltk_gio_hang_ltk_san_pham] FOREIGN KEY([ma_san_pham])
REFERENCES [dbo].[ltk_san_pham] ([masp])
GO
ALTER TABLE [dbo].[ltk_gio_hang] CHECK CONSTRAINT [FK_ltk_gio_hang_ltk_san_pham]
GO
ALTER TABLE [dbo].[ltk_hoa_don]  WITH CHECK ADD  CONSTRAINT [fk_hoa_don_khach_hang] FOREIGN KEY([makh])
REFERENCES [dbo].[ltk_khach_hang] ([ltk_makh])
ON UPDATE CASCADE
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[ltk_hoa_don] CHECK CONSTRAINT [fk_hoa_don_khach_hang]
GO
ALTER TABLE [dbo].[ltk_san_pham]  WITH CHECK ADD  CONSTRAINT [FK_ltk_san_pham_LTK_Kho] FOREIGN KEY([ma_kho])
REFERENCES [dbo].[LTK_Kho] ([LTK_MaKho])
GO
ALTER TABLE [dbo].[ltk_san_pham] CHECK CONSTRAINT [FK_ltk_san_pham_LTK_Kho]
GO
ALTER TABLE [dbo].[ltk_san_pham]  WITH CHECK ADD  CONSTRAINT [FK_ltk_san_pham_ltk_khuyen_mai] FOREIGN KEY([makm])
REFERENCES [dbo].[ltk_khuyen_mai] ([makm])
GO
ALTER TABLE [dbo].[ltk_san_pham] CHECK CONSTRAINT [FK_ltk_san_pham_ltk_khuyen_mai]
GO
ALTER TABLE [dbo].[ltk_san_pham]  WITH CHECK ADD  CONSTRAINT [FK_ltk_san_pham_ltk_nha_cung_cap] FOREIGN KEY([mancc])
REFERENCES [dbo].[ltk_nha_cung_cap] ([mancc])
GO
ALTER TABLE [dbo].[ltk_san_pham] CHECK CONSTRAINT [FK_ltk_san_pham_ltk_nha_cung_cap]
GO
ALTER TABLE [dbo].[ltk_gio_hang]  WITH CHECK ADD CHECK  (([so_luong]>(0)))
GO
