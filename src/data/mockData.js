export const navLinks = [
  { id: 'hero', label: 'Trang Chủ', href: '#hero' },
  { id: 'about', label: 'Tuyệt Phẩm Cà Phê', href: '#about' },
  { id: 'products', label: 'Sản Phẩm', href: '#products' },
  { id: 'faq', label: 'Giải Đáp', href: '#faq' },
  { id: 'contact', label: 'Đặt Hẹn & Tư Vấn', href: '#contact' },
];

export const heroContent = {
  badge: 'Thương hiệu cà phê số 1 Việt Nam',
  title: 'Năng Lượng Khởi Động Sáng Tạo Cùng Trung Nguyên Legend',
  subtitle: 'Khai mở năng lượng tỉnh thức từ những hạt Robusta Buôn Ma Thuột trứ danh hòa quyện bí quyết huyền bí phương Đông.',
  ctaPrimary: 'Khám Phá Tuyệt Phẩm',
  ctaSecondary: 'Đặt Lịch Trải Nghiệm',
  stats: [
    { value: '25+', label: 'Năm di sản & phụng sự' },
    { value: '80+', label: 'Quốc gia hiện diện' },
    { value: '100%', label: 'Cà phê nguyên chất tuyển chọn' },
  ]
};

export const aboutContent = {
  subtitle: 'Hành Trình Khát Vọng',
  title: 'Cà phê Đạo - Lối sống Khát vọng & Tỉnh thức',
  description1: 'Được sinh ra từ thánh địa cà phê Buôn Ma Thuột, Trung Nguyên Legend tôn vinh giá trị của từng giọt cà phê, biến hương vị đậm đà truyền thống thành biểu tượng của sự sáng tạo và thành công.',
  description2: 'Chúng tôi tin rằng cà phê không chỉ là thức uống thông thường, mà là nguồn năng lượng của tư duy đột phá, gắn kết những tâm hồn lớn cùng chung chí hướng phụng sự cộng đồng.',
  features: [
    {
      title: 'Hạt Tuyển Chọn Buôn Ma Thuột',
      desc: '100% hạt Robusta tốt nhất thế giới được ủ lên men tự nhiên và rang mộc đậm vị.',
      icon: 'Award'
    },
    {
      title: 'Công Nghệ Nano Độc Quyền',
      desc: 'Giữ trọn vẹn hương thơm nguyên bản của cà phê tươi xay nhuyễn siêu mịn.',
      icon: 'Sparkles'
    },
    {
      title: 'Triết Lý Không Gian Cà Phê',
      desc: 'Không gian tĩnh lặng khơi nguồn suy tưởng và những ý tưởng vĩ đại.',
      icon: 'BookOpen'
    }
  ]
};

export const categories = [
  'Tất cả',
  'Cà phê Năng Lượng G7',
  'Cà phê Rang Xay Tuyệt Phẩm',
  'Hộp Quà Sang Trọng Legend'
];

export const products = [
  {
    id: 1,
    name: 'Cà Phê G7 3in1 Đậm Vị Nguyên Bản',
    category: 'Cà phê Năng Lượng G7',
    price: 68000,
    rating: 4.9,
    reviews: 1240,
    tag: 'Bán chạy nhất',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
    description: 'Vị đậm đà, thơm lừng đặc trưng chinh phục hơn 80 quốc gia trên thế giới.',
    details: 'Cà phê hòa tan G7 3in1 chiết xuất trực tiếp từ những hạt cà phê Robusta thượng hạng, công nghệ rang độc quyền lưu giữ vị đắng dịu êm cùng hương thơm ngào ngạt.',
    specs: {
      origin: 'Buôn Ma Thuột, Đắk Lắk',
      roastLevel: 'Rang vừa',
      weight: 'Hộp 20 gói x 16g',
      tasteNotes: 'Đậm đà, béo ngậy vừa vặn, hậu vị ngọt kéo dài'
    }
  },
  {
    id: 2,
    name: 'Trung Nguyên Chế Phin Số 4',
    category: 'Cà phê Rang Xay Tuyệt Phẩm',
    price: 135000,
    rating: 4.8,
    reviews: 830,
    tag: 'Nổi bật',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    description: 'Sự phối trộn tinh tế từ 4 loại hạt Culi Robusta, Arabica, Catimor và Excelsa.',
    details: 'Sản phẩm chuyên biệt cho gu thưởng thức phin truyền thống. Hương thơm thanh khiết, sánh đặc quyến rũ, vị êm mượt khó quên.',
    specs: {
      origin: 'Đắk Lắk & Lâm Đồng',
      roastLevel: 'Rang đậm',
      weight: 'Túi 500g',
      tasteNotes: 'Chua thanh nhẹ, đắng êm, hương hoa tự nhiên'
    }
  },
  {
    id: 3,
    name: 'Trung Nguyên Sáng Tạo 8 (Cà Phê Chồn Huyền Thoại)',
    category: 'Cà phê Rang Xay Tuyệt Phẩm',
    price: 285000,
    rating: 5.0,
    reviews: 410,
    tag: 'Cao cấp',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
    description: 'Tuyệt phẩm cà phê ủ hương sinh học mô phỏng vị cà phê chồn độc bản.',
    details: 'Được mệnh danh là cà phê của nguyên thủ quốc gia và các bậc danh nhân. Mùi hương nồng nàn quý phái với vị êm ru đầy nội lực.',
    specs: {
      origin: 'Cầu Đất & Buôn Ma Thuột',
      roastLevel: 'Rang nghệ nhân',
      weight: 'Hộp quà 500g (2 túi 250g)',
      tasteNotes: 'Hương thơm xạ hương, vị đắng dịu, thanh lịch'
    }
  },
  {
    id: 4,
    name: 'Hộp Quà Cà Phê Triết Đạo Legend Masterpiece',
    category: 'Hộp Quà Sang Trọng Legend',
    price: 850000,
    rating: 4.9,
    reviews: 195,
    tag: 'Quà tặng vinh danh',
    image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80',
    description: 'Bộ quà tặng cao cấp gồm phin nhôm mạ vàng, sách Khát Vọng Khởi Nghiệp và cà phê thượng hạng.',
    details: 'Món quà trang trọng gửi trao đối tác tri kỷ, mang thông điệp về sự trân quý, khát vọng vươn tầm và năng lượng sáng tạo.',
    specs: {
      origin: 'Phiên bản tuyển chọn đặc biệt',
      roastLevel: 'Specialty Selection',
      weight: 'Bộ quà tặng giới hạn',
      tasteNotes: 'Đa tầng hương thơm ngát, hậu vị lưu luyến cả ngày'
    }
  },
  {
    id: 5,
    name: 'Cà Phê G7 Gu Mạnh X2 (G7 Strong)',
    category: 'Cà phê Năng Lượng G7',
    price: 79000,
    rating: 4.7,
    reviews: 620,
    tag: 'Năng lượng mạnh mẽ',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80',
    description: 'Gấp đôi hàm lượng cà phê, giải pháp cho những ngày cần tập trung cao độ.',
    details: 'Được nghiên cứu dành riêng cho những người trẻ cần năng lượng tỉnh thức bứt phá trong công việc và học tập liên tục.',
    specs: {
      origin: 'Buôn Ma Thuột',
      roastLevel: 'Rang đậm',
      weight: 'Hộp 24 gói x 25g',
      tasteNotes: 'Đắng đậm nét, tỉnh táo tức thì, ít ngọt'
    }
  },
  {
    id: 6,
    name: 'Cà Phê Hạt Mộc Espresso Buôn Ma Thuột',
    category: 'Cà phê Rang Xay Tuyệt Phẩm',
    price: 195000,
    rating: 4.8,
    reviews: 350,
    tag: 'Nguyên chất 100%',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80',
    description: 'Hạt cà phê mộc không tẩm ướp, hoàn hảo cho máy pha espresso hiện đại.',
    details: 'Lớp crema dày mịn màu hổ phách, độ dày thân vừa phải, phù hợp cho quán cà phê specialty và gia đình hiện đại.',
    specs: {
      origin: 'Cao nguyên Đắk Lắk',
      roastLevel: 'Medium-Dark',
      weight: 'Túi 1000g có van 1 chiều',
      tasteNotes: 'Hương chocolate đen, hạnh nhân nướng, caramel'
    }
  }
];

export const faqItems = [
  {
    id: 1,
    question: 'Điểm khác biệt cốt lõi của Cà phê Trung Nguyên là gì?',
    answer: 'Trung Nguyên sở hữu nguồn nguyên liệu quý hiếm từ thủ phủ cà phê Buôn Ma Thuột với bí quyết phối trộn thảo mộc huyền bí phương Đông cùng công nghệ xay nano độc quyền, tạo nên vị cà phê đậm chất Việt không thể sao chép.'
  },
  {
    id: 2,
    question: 'Làm thế nào để phân biệt cà phê Trung Nguyên chính hãng?',
    answer: 'Tất cả sản phẩm chính hãng đều có tem chống giả công nghệ cao, mã QR truy xuất nguồn gốc trên bao bì và đường vân ép sắc nét với logo Trung Nguyên Legend / G7 rõ ràng.'
  },
  {
    id: 3,
    question: 'Chính sách đặt hàng số lượng lớn cho doanh nghiệp và quà tặng ra sao?',
    answer: 'Chúng tôi cung cấp chính sách chiết khấu ưu đãi hấp dẫn từ 10% - 35% cho đơn hàng đối tác công ty, hỗ trợ in khắc logo lên hộp quà sang trọng và giao tận nơi toàn quốc.'
  },
  {
    id: 4,
    question: 'Làm sao để bảo quản cà phê rang xay giữ trọn vẹn hương vị lâu nhất?',
    answer: 'Nên bảo quản cà phê trong hộp kín mờ đục hoặc túi có van 1 chiều, đặt ở nơi khô ráo, thoáng mát (nhiệt độ 20-25°C), tránh tiếp xúc với ánh nắng mặt trời trực tiếp và không để trong ngăn mát tủ lạnh.'
  },
  {
    id: 5,
    question: 'Tôi có thể đăng ký thưởng thức cà phê thử nghiệm tại showroom không?',
    answer: 'Hoàn toàn được! Bạn có thể sử dụng biểu mẫu "Đặt Hẹn & Tư Vấn" ngay trên trang web để chọn khung giờ và địa điểm Không Gian Cà Phê Trung Nguyên Legend gần nhất.'
  }
];

export const footerInfo = {
  brand: 'TRUNG NGUYÊN LEGEND',
  slogan: 'Năng lượng tỉnh thức để thành công',
  address: '82-84 Bùi Thị Xuân, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh',
  phone: '1900 6011',
  email: 'contact@trungnguyenlegend.com',
  branches: [
    'Hồ Chí Minh: 82-84 Bùi Thị Xuân, Q.1',
    'Hà Nội: 52 Hai Bà Trưng, Q. Hoàn Kiếm',
    'Buôn Ma Thuột: Làng Cà Phê Trung Nguyên'
  ],
  copyright: '© 2026 Trung Nguyên Legend. Tôn vinh cà phê Việt vươn tầm quốc tế.',
  developer: 'Thiết kế & phát triển bởi Nguyễn Việt Dũng'
};
