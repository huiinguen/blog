// js/travel-ranks.js

function getRank(score) {
    if (score < 5) return "Tân Binh Du Lịch";
    if (score < 15) return "Lữ Khách Tiềm Năng";
    if (score < 30) return "Người Kể Chuyện";
    if (score < 50) return "Nhà Thám Hiểm";
    if (score < 80) return "Chuyên Gia Đặt Chân";
    if (score < 120) return "Thợ Săn Trải Nghiệm";
    if (score < 170) return "Bậc Thầy Khám Phá";
    if (score < 230) return "Anh Hùng Lộ Trình";
    if (score < 300) return "Đại Sứ Du Lịch";
    if (score < 380) return "Kẻ Lang Thang Huyền Bí";
    if (score < 470) return "Hành Giả Bất Diệt";
    if (score < 570) return "Vua Khám Phá";
    if (score < 680) return "Minh Chủ Xê Dịch";
    if (score < 800) return "Thần Hành Thiên Hạ";
    if (score < 950) return "Bách Khoa Du Lịch";
    if (score < 1150) return "Chúa Tể Địa Hình";
    if (score < 1400) return "Trùm Khám Phá";
    if (score < 1700) return "Thiên Vương Lữ Hành";
    if (score < 2000) return "Kim Cương Vô Song";
    return "Huyền Thoại Du Lịch Việt Nam";
}

function getRankList() {
    return [
        { score: 0, name: "Tân Binh Du Lịch", description: "Bắt đầu hành trình khám phá! Những bước chân đầu tiên đầy hứa hẹn." },
        { score: 5, name: "Lữ Khách Tiềm Năng", description: "Bạn đã ghé thăm vài điểm đến và sẵn sàng cho những hành trình lớn hơn." },
        { score: 15, name: "Người Kể Chuyện", description: "Mỗi điểm đến là một câu chuyện. Bạn đang tích lũy những câu chuyện của riêng mình." },
        { score: 30, name: "Nhà Thám Hiểm", description: "Bạn đã khám phá nhiều vùng đất mới, không ngại thử thách." },
        { score: 50, name: "Chuyên Gia Đặt Chân", description: "Kinh nghiệm của bạn đang tăng lên! Dấu chân bạn đã in lên nhiều nơi." },
        { score: 80, name: "Thợ Săn Trải Nghiệm", description: "Bạn không chỉ đi, bạn còn tìm kiếm và trải nghiệm những điều độc đáo." },
        { score: 120, name: "Bậc Thầy Khám Phá", description: "Không có nơi nào là quá xa lạ với bạn. Bạn nắm vững nghệ thuật khám phá." },
        { score: 170, name: "Anh Hùng Lộ Trình", description: "Bạn là người hùng trên mọi nẻo đường, dẫn lối cho những chuyến đi." },
        { score: 230, name: "Đại Sứ Du Lịch", description: "Thúc đẩy niềm đam mê xê dịch đến mọi người, truyền cảm hứng cho cộng đồng." },
        { score: 300, name: "Kẻ Lang Thang Huyền Bí", description: "Bạn đi qua những con đường ít người biết, khám phá những bí mật ẩn giấu." },
        { score: 380, name: "Hành Giả Bất Diệt", description: "Bước chân bạn nhẹ như gió, khám phá không ngừng nghỉ, không biết mệt mỏi!" },
        { score: 470, name: "Vua Khám Phá", description: "Mọi ngóc ngách của đất nước đang dần nằm trong lòng bàn tay bạn." },
        { score: 570, name: "Minh Chủ Xê Dịch", description: "Dẫn dắt cộng đồng, mọi hành trình đều được bạn khai phá." },
        { score: 680, name: "Thần Hành Thiên Hạ", description: "Danh tiếng vang xa, bạn là bậc thầy của những chuyến đi. Không ai sánh bằng!" },
        { score: 800, name: "Bách Khoa Du Lịch", description: "Kiến thức về địa danh và văn hóa của bạn là vô tận. Một kho tàng sống về du lịch." },
        { score: 950, name: "Chúa Tể Địa Hình", description: "Bạn đã chinh phục mọi loại địa hình, từ núi cao đến biển sâu, rừng rậm đến sa mạc." },
        { score: 1150, name: "Trùm Khám Phá", description: "Mọi thử thách đều bị bạn vượt qua. Bạn là đỉnh cao của sự khám phá." },
        { score: 1400, name: "Thiên Vương Lữ Hành", description: "Với bạn, không có giới hạn nào trong hành trình. Bạn đã đạt đến cảnh giới phi thường." },
        { score: 1700, name: "Kim Cương Vô Song", description: "Đã đạt đến đẳng cấp cao nhất, tự tin chinh phục mọi nẻo đường. Bạn là duy nhất!" },
        { score: 2000, name: "Huyền Thoại Du Lịch Việt Nam", description: "Bạn đã chinh phục gần như mọi danh lam thắng cảnh và trở thành biểu tượng sống của du lịch Việt Nam!" }
    ];
}