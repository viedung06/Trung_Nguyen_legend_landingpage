# Landing Page — Thương Hiệu Cà Phê Trung Nguyên Legend

Dự án Landing Page chính thức cho thương hiệu **Trung Nguyên Legend** (100% Frontend - Phía Client). Trang web được thiết kế theo phong cách tinh tế, sang trọng với bảng màu đặc trưng của cà phê (nâu trầm, đen, vàng đồng, kem), không dùng màu sắc lòe loẹt, tuân thủ chặt chẽ triết lý cà phê năng lượng đổi đời.

---

## ☕ 1. Giới thiệu doanh nghiệp
**Trung Nguyên Legend** là thương hiệu cà phê số 1 Việt Nam, bắt nguồn từ thủ phủ cà phê Buôn Ma Thuột. Dự án giới thiệu hệ sinh thái sản phẩm cà phê năng lượng (G7, Cà phê Rang Xay Tuyệt Phẩm, Hộp Quà Triết Đạo Legend Masterpiece), triết lý Cà Phê Đạo và kết nối trải nghiệm khách hàng/doanh nghiệp.

---

## 🛠 2. Danh sách 6/6 thao tác Hooks & State đã triển khai

Dự án tích hợp đầy đủ **cả 6 thao tác** (vượt chỉ tiêu tối thiểu 4/6):

| Thao tác | Khu vực | Kỹ thuật sử dụng | Mô tả luồng hoạt động |
|---|---|---|---|
| **1. Quản lý điều hướng & Cuộn** | `Navbar.jsx` | `useEffect` + Cleanup `removeEventListener` | Lắng nghe sự kiện `window.addEventListener('scroll')`. Khi người dùng cuộn quá $50px$, Header tự động co nhỏ chiều cao, kích hoạt lớp phủ kính mờ `backdrop-blur`, thêm bóng đổ `shadow-md` và viền. Khi unmount, trả về hàm dọn dẹp `removeEventListener` tránh triệt để Memory Leak. |
| **2. Bộ lọc & Tìm kiếm danh mục** | `ProductFilter.jsx` | `useState` + `useMemo` | Phân loại theo tab danh mục (`Tất cả`, `G7`, `Rang xay`, `Hộp quà`) kết hợp ô tìm kiếm theo tên/mô tả. Sử dụng `useMemo` tính toán lại danh sách tức thì khi đổi tab hoặc gõ phím, loại bỏ hoàn toàn hiện tượng giật trang. |
| **3. Tương tác Hộp thoại (Modal)** | `Modal.jsx` | `useState` + `useEffect` | Mở/đóng chi tiết từng sản phẩm. Khi modal mở, tự động khóa cuộn trang (`document.body.style.overflow = 'hidden'`) và mở lại khi đóng. Hỗ trợ đóng modal linh hoạt bằng: phím `Esc`, bấm nút đóng `X`, hoặc click ra vùng Backdrop bên ngoài. |
| **4. Accordion FAQ thu gọn/mở rộng** | `FAQ.jsx` | `useState` | Danh sách câu hỏi thường gặp. Áp dụng cơ chế **chỉ mở duy nhất 1 câu tại một thời điểm** (`openId === item.id`), khi người dùng bấm mở câu mới thì câu đang mở trước đó tự động thu lại mượt mà. |
| **5. Form Liên hệ & Đặt lịch tư vấn** | `ContactForm.jsx` | Controlled Components + Async Simulation (`setTimeout`) | Quản lý form hoàn toàn qua `useState`. Validate client-side chặt chẽ (báo lỗi đỏ khi bỏ trống hoặc email sai định dạng). Khi submit, giả lập gửi API bất đồng bộ sau 1.5 giây: nút bị disabled và hiển thị icon loading xoay; khi xong hiển thị Toast thông báo và tự động reset toàn bộ ô nhập. |
| **6. Đồng bộ dữ liệu cục bộ** | `useLocalStorage.js`, `ThemeToggle.jsx`, `App.jsx` | `useEffect` + `localStorage` | Đồng bộ 2 tính năng: **Chế độ Giao diện Dark/Light Mode** và **Danh sách sản phẩm quan tâm (Wishlist/Favorites)**. Khi F5 tải lại trang, toàn bộ trạng thái theme và danh sách đã lưu được giữ nguyên từ `localStorage`. |

---

## 🗄 3. Cấu trúc dữ liệu tập trung (No Hardcode HTML)
Toàn bộ dữ liệu của website (Menu điều hướng, biểu ngữ Hero, câu chuyện thương hiệu, danh mục sản phẩm, chi tiết thông số, câu hỏi FAQ, thông tin chi nhánh liên hệ) được lưu trữ tập trung tại:
👉 `src/data/mockData.js`

Các component chỉ nhận dữ liệu và dùng hàm `.map()` để render giao diện động.

---

## 🎨 4. Bảng màu chủ đạo (Coffee Aesthetic Palette)
- **Nâu cà phê đậm:** `#5D4037` (Coffee 700)
- **Nâu Espresso:** `#42281D` (Coffee 800)
- **Đen Cà phê:** `#1A0E0A` (Coffee 950)
- **Vàng đồng Legend:** `#D4A574` (Gold 500)
- **Kem nhẹ:** `#FFF8E1` (Cream 300)

---

## 🚀 5. Hướng dẫn chạy dự án

### Yêu cầu môi trường:
- Node.js >= 18.x
- Trình quản lý gói `npm`

### Các bước khởi chạy:
```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Khởi chạy môi trường phát triển (Development)
npm run dev

# 3. Mở trình duyệt và truy cập:
# http://localhost:5173
```

### Lệnh đóng gói sản phẩm (Production Build):
```bash
npm run build
npm run preview
```
