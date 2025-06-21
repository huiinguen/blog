document.addEventListener('DOMContentLoaded', () => {
    console.log('Travel JavaScript loaded!');

    // Dữ liệu các tỉnh và địa điểm
    const provincesData = {
        'hanoi': {
            name: 'Hà Nội',
            places: [
                { id: 'hn-hoankiem', name: 'Hồ Hoàn Kiếm', completed: false },
                { id: 'hn-vantemple', name: 'Văn Miếu - Quốc Tử Giám', completed: false },
                { id: 'hn-oldquarter', name: 'Phố Cổ Hà Nội', completed: false },
                { id: 'hn-hochiminh', name: 'Lăng Chủ tịch Hồ Chí Minh', completed: false },
                { id: 'hn-westlake', name: 'Hồ Tây', completed: false },
                { id: 'hn-ngochason', name: 'Đền Ngọc Sơn', completed: false },
                { id: 'hn-pagoda', name: 'Chùa Một Cột', completed: false }
            ]
        },
        'hochiminh': {
            name: 'TP. Hồ Chí Minh',
            places: [
                { id: 'hcm-notredame', name: 'Nhà thờ Đức Bà', completed: false },
                { id: 'hcm-postoffice', name: 'Bưu điện Trung tâm Sài Gòn', completed: false },
                { id: 'hcm-bennt', name: 'Chợ Bến Thành', completed: false },
                { id: 'hcm-warremnants', name: 'Bảo tàng Chứng tích Chiến tranh', completed: false },
                { id: 'hcm-cuochit', name: 'Địa đạo Củ Chi', completed: false },
                { id: 'hcm-nguyenv', name: 'Phố đi bộ Nguyễn Huệ', completed: false }
            ]
        },
        'danang': {
            name: 'Đà Nẵng',
            places: [
                { id: 'dn-mykhe', name: 'Bãi biển Mỹ Khê', completed: false },
                { id: 'dn-bridges', name: 'Cầu Rồng & Cầu Sông Hàn', completed: false },
                { id: 'dn-marble', name: 'Ngũ Hành Sơn', completed: false },
                { id: 'dn-bana', name: 'Bà Nà Hills', completed: false },
                { id: 'dn-sonnt', name: 'Bán đảo Sơn Trà', completed: false },
                { id: 'dn-linhung', name: 'Chùa Linh Ứng', completed: false },
                { id: 'dn-reunamo', name: 'Bãi biển rêu Nam Ô', completed: false },
                { id: 'dn-haivan', name: 'Đèo Hải Vân', completed: false },
            ]
        },
        'hue': {
            name: 'Huế',
            places: [
                { id: 'hue-citadel', name: 'Kinh thành Huế', completed: false },
                { id: 'hue-thienmu', name: 'Chùa Thiên Mụ', completed: false },
                { id: 'hue-perfume', name: 'Sông Hương', completed: false },
                { id: 'hue-royal', name: 'Lăng Tự Đức', completed: false },
                { id: 'hue-dongba', name: 'Chợ Đông Ba', completed: false }
            ]
        },
        'nhatrang': {
            name: 'Nha Trang',
            places: [
                { id: 'nt-beach', name: 'Bãi biển Nha Trang', completed: false },
                { id: 'nt-ponagar', name: 'Tháp Bà Ponagar', completed: false },
                { id: 'nt-vinpearl', name: 'Vinpearl Land', completed: false },
                { id: 'nt-island', name: 'Hòn Mun', completed: false },
                { id: 'nt-mudbath', name: 'Tắm bùn Tháp Bà', completed: false }
            ]
        },
        'halong': {
            name: 'Vịnh Hạ Long',
            places: [
                { id: 'hl-kays', name: 'Hòn Gà Chọi', completed: false },
                { id: 'hl-cave', name: 'Hang Sửng Sốt', completed: false },
                { id: 'hl-titop', name: 'Đảo Titop', completed: false },
                { id: 'hl-cruise', name: 'Du thuyền vịnh', completed: false }
            ]
        },
        'sapa': {
            name: 'Sa Pa',
            places: [
                { id: 'sp-fansipan', name: 'Đỉnh Fansipan', completed: false },
                { id: 'sp-catcat', name: 'Bản Cát Cát', completed: false },
                { id: 'sp-stonechurch', name: 'Nhà thờ Đá', completed: false },
                { id: 'sp-hamrong', name: 'Núi Hàm Rồng', completed: false }
            ]
        },
        'phuquoc': {
            name: 'Phú Quốc',
            places: [
                { id: 'pq-starbeach', name: 'Bãi Sao', completed: false },
                { id: 'pq-fishsauce', name: 'Nhà thùng nước mắm', completed: false },
                { id: 'pq-prison', name: 'Nhà tù Phú Quốc', completed: false },
                { id: 'pq-cablecar', name: 'Cáp treo Hòn Thơm', completed: false }
            ]
        },
        'dalat': {
            name: 'Đà Lạt',
            places: [
                { id: 'dl-xuanhuong', name: 'Hồ Xuân Hương', completed: false },
                { id: 'dl-domain', name: 'Nhà thờ Con Gà', completed: false },
                { id: 'dl-valley', name: 'Thung lũng Tình Yêu', completed: false },
                { id: 'dl-train', name: 'Ga Đà Lạt', completed: false },
                { id: 'dl-crazyhouse', name: 'Biệt thự Hằng Nga (Crazy House)', completed: false }
            ]
        },
        'hoian': {
            name: 'Hội An',
            places: [
                { id: 'ha-bridge', name: 'Chùa Cầu', completed: false },
                { id: 'ha-oldtown', name: 'Phố cổ Hội An', completed: false },
                { id: 'ha-lantern', name: 'Thưởng thức đèn lồng', completed: false },
                { id: 'ha-river', name: 'Thuyền sông Hoài', completed: false }
            ]
        },
        'cantho': {
            name: 'Cần Thơ',
            places: [
                { id: 'ct-floating', name: 'Chợ nổi Cái Răng', completed: false },
                { id: 'ct-ninhkieu', name: 'Bến Ninh Kiều', completed: false },
                { id: 'ct-ongpagoda', name: 'Chùa Ông', completed: false },
                { id: 'ct-fruitgardens', name: 'Vườn trái cây Mỹ Khánh', completed: false }
            ]
        },

        'quynhon': {
            name: 'Bình Định (Quy Nhơn)',
            places: [
                { id: 'qn-kyco', name: 'Bãi Kỳ Co', completed: false },
                { id: 'qn-eonoi', name: 'Eo Gió', completed: false },
                { id: 'qn-thapdoi', name: 'Tháp Đôi', completed: false },
                { id: 'qn-ghenhda', name: 'Ghềnh Đá Đĩa Nhơn Lý', completed: false }
            ]
        },

        'tayninh': {
            name: 'Tây Ninh',
            places: [
                { id: 'tn-banmay', name: 'Núi Bà Đen', completed: false },
                { id: 'tn-caodai', name: 'Tòa thánh Cao Đài', completed: false },
                { id: 'tn-ho-dau-tieng', name: 'Hồ Dầu Tiếng', completed: false }
            ]
        },

        'ninhbinh': {
            name: 'Ninh Bình',
            places: [
                { id: 'nb-trang-an', name: 'Tràng An', completed: false },
                { id: 'nb-bichdong', name: 'Chùa Bích Động', completed: false },
                { id: 'nb-hangmua', name: 'Hang Múa', completed: false },
                { id: 'nb-tamcoc', name: 'Tam Cốc – Bích Động', completed: false }
            ]
        },

        'quangbinh': {
            name: 'Quảng Bình',
            places: [
                { id: 'qb-sondoong', name: 'Hang Sơn Đoòng', completed: false },
                { id: 'qb-thientuong', name: 'Động Thiên Đường', completed: false },
                { id: 'qb-phongnha', name: 'Vườn quốc gia Phong Nha – Kẻ Bàng', completed: false },
                { id: 'qb-nhatle', name: 'Bãi biển Nhật Lệ', completed: false }
            ]
        },

        'kontum': {
            name: 'Kon Tum',
            places: [
                { id: 'kt-nhathong', name: 'Nhà thờ gỗ', completed: false },
                { id: 'kt-mangden', name: 'Măng Đen', completed: false },
                { id: 'kt-camp', name: 'Ngục Kon Tum', completed: false }
            ]
        },

        'tuyenquang': {
            name: 'Tuyên Quang',
            places: [
                { id: 'tq-thenlen', name: 'Hồ Na Hang', completed: false },
                { id: 'tq-tantrai', name: 'Thác Bản Ba', completed: false },
                { id: 'tq-ktls', name: 'Khu di tích Tân Trào', completed: false }
            ]
        },

        'giaolai': {
            name: 'Gia Lai',
            places: [
                { id: 'gl-bienho', name: 'Biển Hồ (T’Nưng)', completed: false },
                { id: 'gl-thacphun', name: 'Thác Phú Cường', completed: false },
                { id: 'gl-pleiku', name: 'Chùa Minh Thành – Pleiku', completed: false }
            ]
        },

        'baclieu': {
            name: 'Bạc Liêu',
            places: [
                { id: 'bl-congtu', name: 'Nhà Công Tử Bạc Liêu', completed: false },
                { id: 'bl-diengio', name: 'Cánh đồng quạt gió', completed: false },
                { id: 'bl-nhathu', name: 'Nhà thờ Tắc Sậy', completed: false }
            ]
        },

        'haiduong': {
            name: 'Hải Dương',
            places: [
                { id: 'hd-conson', name: 'Côn Sơn – Kiếp Bạc', completed: false },
                { id: 'hd-hamrong', name: 'Đền Tranh', completed: false },
                { id: 'hd-chi', name: 'Chùa Côn Sơn', completed: false }
            ]
        },
        // Nghệ An
        'nghean': {
            name: 'Nghệ An',
            places: [
                { id: 'na-quehuong', name: 'Làng Sen – Quê Bác', completed: false },
                { id: 'na-cualo', name: 'Biển Cửa Lò', completed: false },
                { id: 'na-puxailai', name: 'Đỉnh Pù Xai Lai Leng', completed: false },
                { id: 'na-kemwaterfall', name: 'Thác Kèm', completed: false },
                { id: 'na-thanhchuongtea', name: 'Đồi chè Thanh Chương', completed: false }
            ]
        },

        // Thanh Hóa
        'thanhhoa': {
            name: 'Thanh Hóa',
            places: [
                { id: 'thh-samson', name: 'Biển Sầm Sơn', completed: false },
                { id: 'thh-citadel', name: 'Thành Nhà Hồ', completed: false },
                { id: 'thh-puluong', name: 'Khu bảo tồn Pù Luông', completed: false },
                { id: 'thh-benenche', name: 'Vườn quốc gia Bến En', completed: false }
            ]
        },

        // Bình Thuận
        'binhthuan': {
            name: 'Bình Thuận',
            places: [
                { id: 'bth-muiNe', name: 'Mũi Né', completed: false },
                { id: 'bth-whiteSand', name: 'Đồi Cát Trắng', completed: false },
                { id: 'bth-taCu', name: 'Núi Tà Cú', completed: false },
                { id: 'bth-keGa', name: 'Hải đăng Kê Gà', completed: false }
            ]
        },

        // Hà Giang
        'hagiang': {
            name: 'Hà Giang',
            places: [
                { id: 'hg-dongvan', name: 'Cao nguyên đá Đồng Văn', completed: false },
                { id: 'hg-maPiLeng', name: 'Đèo Mã Pí Lèng', completed: false },
                { id: 'hg-lungcu', name: 'Cột cờ Lũng Cú', completed: false },
                { id: 'hg-quanba', name: 'Núi đôi Quản Bạ', completed: false }
            ]
        },

        // Lào Cai
        'laocai': {
            name: 'Lào Cai',
            places: [
                { id: 'lc-bacHa', name: 'Chợ phiên Bắc Hà', completed: false },
                { id: 'lc-muongHoa', name: 'Thung lũng Mường Hoa', completed: false },
                { id: 'lc-taPhin', name: 'Bản Tả Phìn', completed: false }
            ]
        },

        // Vũng Tàu (Bà Rịa - Vũng Tàu)
        'vungtau': {
            name: 'Bà Rịa – Vũng Tàu',
            places: [
                { id: 'vt-frontbeach', name: 'Bãi Trước', completed: false },
                { id: 'vt-backbeach', name: 'Bãi Sau', completed: false },
                { id: 'vt-christstatue', name: 'Tượng Chúa dang tay', completed: false },
                { id: 'vt-longhai', name: 'Biển Long Hải', completed: false },
                { id: 'vt-hoTram', name: 'Biển Hồ Tràm', completed: false }
            ]
        },

        // An Giang
        'angiang': {
            name: 'An Giang',
            places: [
                { id: 'ag-samMountain', name: 'Núi Sam – Châu Đốc', completed: false },
                { id: 'ag-camdinh', name: 'Rừng Tràm Trà Sư', completed: false },
                { id: 'ag-taPa', name: 'Hồ Tà Pạ', completed: false },
                { id: 'ag-basa', name: 'Làng nuôi cá Basa', completed: false }
            ]
        },
        'haiphong': {
            name: 'Hải Phòng',
            places: [
                { id: 'hp-daoquyet', name: 'Đảo Cát Bà (vịnh Lan Hạ)', completed: false },
                { id: 'hp-catba', name: 'Vườn quốc gia Cát Bà', completed: false },
                { id: 'hp-doctovn', name: 'Đồ Sơn', completed: false },
                { id: 'hp-yenngua', name: 'Đảo Yến Ngựa', completed: false }
            ]
        },

        // Cao Bằng
        'caobang': {
            name: 'Cao Bằng',
            places: [
                { id: 'cb-banggiang', name: 'Thác Bản Giốc', completed: false },
                { id: 'cb-helong', name: 'Hồ Thang Hen', completed: false },
                { id: 'cb-pacbo', name: 'Di tích Pác Bó (Hang Cốc Bó)', completed: false }
            ]
        },

        // Bắc Kạn
        'backan': {
            name: 'Bắc Kạn',
            places: [
                { id: 'bk-baikhothien', name: 'Hồ Ba Bể', completed: false },
                { id: 'bk-paclam', name: 'Động Pac Lầm', completed: false },
                { id: 'bk-giay', name: 'Làng văn hóa dân tộc Giấy', completed: false }
            ]
        },

        // Lạng Sơn
        'langson': {
            name: 'Lạng Sơn',
            places: [
                { id: 'ls-taigulia', name: 'Cửa khẩu Tà Lùng', completed: false },
                { id: 'ls-kiendinh', name: 'Đỉnh núi Kỳ Cùng', completed: false },
                { id: 'ls-duyensang', name: 'Đền thờ Mỹ Sơn', completed: false }
            ]
        },

        // Thái Nguyên
        'thainguyen': {
            name: 'Thái Nguyên',
            places: [
                { id: 'tn-thocthai', name: 'Trà Thái Nguyên (gian trà)', completed: false },
                { id: 'tn-dailap', name: 'Thác Đại Lập', completed: false },
                { id: 'tn-cucphuong', name: 'Khu bảo tồn động vật quý hiếm Hương Sơn', completed: false }
            ]
        },

        // Phú Thọ
        'phutho': {
            name: 'Phú Thọ',
            places: [
                { id: 'pt-hungking', name: 'Đền Hùng', completed: false },
                { id: 'pt-nght', name: 'Hồ Động Tiên', completed: false },
                { id: 'pt-baohatien', name: 'Khu du lịch Ba Hộ Tía', completed: false }
            ]
        },

        // Bắc Giang
        'bacgiang': {
            name: 'Bắc Giang',
            places: [
                { id: 'bg-khegam', name: 'Khe Mây - Jrai', completed: false },
                { id: 'bg-lanau', name: 'Làng A Pane (Hoa đỗ quyên)', completed: false },
                { id: 'bg-luptinh', name: 'Thung lũng Lục Nam', completed: false }
            ]
        },

        // Bắc Ninh
        'bacninh': {
            name: 'Bắc Ninh',
            places: [
                { id: 'bn-tranh', name: 'Làng tranh Đông Hồ', completed: false },
                { id: 'bn-denBac', name: 'Chùa Bút Tháp', completed: false },
                { id: 'bn-diedykeson', name: 'Đảo Yến Sơn Tây', completed: false }
            ]
        },

        // Hưng Yên
        'hungyen': {
            name: 'Hưng Yên',
            places: [
                { id: 'hy-dongqua', name: 'Vườn cây ăn trái Phố Hiến', completed: false },
                { id: 'hy-denTa', name: 'Đền Bia', completed: false },
                { id: 'hy-chuuduan', name: 'Làng cổ Đường Lâm', completed: false }
            ]
        },

        // Hòa Bình
        'hoabinh': {
            name: 'Hòa Bình',
            places: [
                { id: 'hb-daoly', name: 'Đảo Dảo Ly (Hồ Hòa Bình)', completed: false },
                { id: 'hb-mocchau', name: 'Thung lũng Mai Châu', completed: false },
                { id: 'hb-banlac', name: 'Khu du lịch bản Lác', completed: false }
            ]
        },

        // Hà Nam
        'hanam': {
            name: 'Hà Nam',
            places: [
                { id: 'hm-dibich', name: 'Chùa Tam Chúc', completed: false },
                { id: 'hm-coedda', name: 'Đồi cừu Tiêu', completed: false },
                { id: 'hm-hen', name: 'Làng văn hóa cổ Phú Xuyên', completed: false }
            ]
        },

        // Nam Định
        'namdinh': {
            name: 'Nam Định',
            places: [
                { id: 'nd-bachdat', name: 'Biển Giao Thủy', completed: false },
                { id: 'nd-phaticon', name: 'Chùa Phổ Minh', completed: false },
                { id: 'nd-phloang', name: 'Lăng Chủ tịch Hồ Chí Minh', completed: false }
            ]
        },

        // Hà Tĩnh
        'hatinh': {
            name: 'Hà Tĩnh',
            places: [
                { id: 'ht-ngthen', name: 'Biển Thiên Cầm', completed: false },
                { id: 'ht-nghenha', name: 'Đền Huyện Đông', completed: false },
                { id: 'ht-ngongruong', name: 'Thác Ngàn Trươi - Cẩm Trang', completed: false }
            ]
        },

        // Quảng Trị
        'quangtri': {
            name: 'Quảng Trị',
            places: [
                { id: 'qt-cotco', name: 'Cồn Cỏ', completed: false },
                { id: 'qt-hienluong', name: 'Cầu Hiền Lương - Bến Hải', completed: false },
                { id: 'qt-seanthemys', name: 'Đảo Hòn Mê', completed: false }
            ]
        },

        // Quảng Ngãi
        'quangngai': {
            name: 'Quảng Ngãi',
            places: [
                { id: 'qn-sanchoa', name: 'Hòn Sẹo', completed: false },
                { id: 'qn-truoikim', name: 'Thác Trăng Trượt', completed: false },
                { id: 'qn-chualavuong', name: 'Chùa Thiên Ấn', completed: false }
            ]
        },

        // Đắk Lắk + Đắk Nông (đã gộp)
        'dkladkn': {
            name: 'Đắk Lắk – Đắk Nông',
            places: [
                { id: 'dk-buonma', name: 'Buôn Ma Thuột – Hồ Lắk', completed: false },
                { id: 'dk-cafe', name: 'Mê Linh Coffee Garden', completed: false },
                { id: 'dk-yokdon', name: 'Vườn quốc gia Yok Đôn', completed: false }
            ]
        }

    }

    // UI Elements
    const provincesGrid = document.getElementById('provinces-grid');
    const rankItem = document.getElementById('rank-item'); // Element "Hạng Hiện Tại"

    // Elements cho Rank Modal
    const rankModal = document.getElementById('rank-modal');
    const closeRankModalBtn = document.getElementById('close-rank-modal');
    const rankListElement = document.getElementById('rank-list'); // UL trong modal

    // Stats Elements
    const completedProvincesSpan = document.getElementById('completed-provinces');
    const totalProvincesSpan = document.getElementById('total-provinces');
    const totalScoreSpan = document.getElementById('total-score');
    const currentRankSpan = document.getElementById('current-rank');

    // --- Data Management ---
    let userData = {
        score: 0
    };

    // Load data from localStorage
    const loadData = () => {
        const savedProgress = localStorage.getItem('travelProgress');
        if (savedProgress) {
            const parsedProgress = JSON.parse(savedProgress);
            for (const provinceId in provincesData) {
                if (parsedProgress && parsedProgress.hasOwnProperty(provinceId)) {
                    provincesData[provinceId].places.forEach(place => {
                        const savedPlace = parsedProgress[provinceId].places.find(p => p.id === place.id);
                        if (savedPlace) {
                            place.completed = savedPlace.completed;
                        }
                    });
                }
            }
        }

        const savedUserData = localStorage.getItem('travelUserData');
        if (savedUserData) {
            const parsedUserData = JSON.parse(savedUserData);
            userData.score = parsedUserData.score || 0;
        }
    };

    // Save data to localStorage
    const saveData = () => {
        localStorage.setItem('travelProgress', JSON.stringify(provincesData));
        localStorage.setItem('travelUserData', JSON.stringify(userData));
    };

    // --- Statistics Calculation & Display ---
    const calculateStats = () => {
        let totalCompletedProvinces = 0;
        let overallScore = 0;
        const totalProvinces = Object.keys(provincesData).length;

        for (const provinceId in provincesData) {
            const province = provincesData[provinceId];
            const completedPlacesInProvince = province.places.filter(place => place.completed);

            overallScore += completedPlacesInProvince.length;

            if (completedPlacesInProvince.length === province.places.length && province.places.length > 0) {
                totalCompletedProvinces++;
            }
        }

        completedProvincesSpan.textContent = totalCompletedProvinces;
        totalProvincesSpan.textContent = totalProvinces;
        totalScoreSpan.textContent = overallScore;
        userData.score = overallScore;

        currentRankSpan.textContent = getRank(overallScore);

        saveData();
    };

    // Rank System - Updated with more levels and higher scores
    const getRank = (score) => {
        if (score < 10) return "Tân Binh Du Lịch";
        if (score < 30) return "Lữ Khách Tiềm Năng";
        if (score < 60) return "Nhà Thám Hiểm";
        if (score < 100) return "Chuyên Gia Du Lịch";
        if (score < 150) return "Bậc Thầy Khám Phá";
        if (score < 200) return "Anh Hùng Khắp Nơi";
        if (score < 300) return "Đại Sứ Du Lịch";
        return "Huyền Thoại Du Lịch Việt Nam";
    };

    const getRankList = () => {
        return [
            { score: 0, name: "Tân Binh Du Lịch", description: "Bắt đầu hành trình khám phá!" },
            { score: 10, name: "Lữ Khách Tiềm Năng", description: "Những bước chân đầu tiên đầy hứa hẹn." },
            { score: 30, name: "Nhà Thám Hiểm", description: "Bạn đã khám phá nhiều vùng đất mới." },
            { score: 60, name: "Chuyên Gia Du Lịch", description: "Kinh nghiệm của bạn đang tăng lên!" },
            { score: 100, name: "Bậc Thầy Khám Phá", description: "Không có nơi nào là quá xa lạ với bạn." },
            { score: 150, name: "Anh Hùng Khắp Nơi", description: "Bạn là người hùng trên mọi nẻo đường." },
            { score: 200, name: "Đại Sứ Du Lịch", description: "Thúc đẩy niềm đam mê xê dịch đến mọi người." },
            { score: 300, name: "Huyền Thoại Du Lịch Việt Nam", description: "Bạn đã chinh phục gần như mọi danh lam thắng cảnh!" }
        ];
    };

    // --- Render Functions ---
    const renderProvinces = () => {
        provincesGrid.innerHTML = '';
        for (const provinceId in provincesData) {
            const province = provincesData[provinceId];
            const completedPlaces = province.places.filter(place => place.completed).length;
            const totalPlaces = province.places.length;
            const progressPercentage = totalPlaces > 0 ? (completedPlaces / totalPlaces) * 100 : 0;

            const provinceCard = document.createElement('div');
            provinceCard.classList.add('glass-card', 'province-card', 'fade-in-on-scroll');
            provinceCard.dataset.province = provinceId;

            provinceCard.innerHTML = `
                <h3>${province.name}</h3>
                <p>Đã đi: <span class="places-visited">${completedPlaces}</span>/<span class="places-total">${totalPlaces}</span> địa điểm</p>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${progressPercentage}%;"></div>
                </div>
                <div class="places-list-container">
                    <ul class="places-list">
                        ${province.places.map(place => `
                            <li class="${place.completed ? 'completed' : ''}" data-place-id="${place.id}">
                                <span>${place.name}</span>
                            </li>
                        `).join('')}
                    </ul>
                    ${totalPlaces > 0 && completedPlaces === totalPlaces ? `
                        <div class="province-reward">
                            <h4>Chúc mừng bạn đã hoàn thành chuyến đi này! 🎉</h4>
                            <p>Bạn đã khám phá hết tất cả các địa điểm tại <span>${province.name}</span>.</p>
                        </div>
                    ` : ''}
                </div>
            `;
            provincesGrid.appendChild(provinceCard);

            // Xử lý sự kiện click để mở rộng/thu gọn thẻ tỉnh và cập nhật trạng thái địa điểm
            provinceCard.addEventListener('click', (event) => {
                // Đảm bảo chỉ xử lý khi click vào thẻ tỉnh, không phải khi click vào danh sách con hoặc phần thưởng
                if (!event.target.closest('.places-list-container li') && !event.target.closest('.province-reward')) {
                    // Thu gọn tất cả các thẻ tỉnh khác đang mở
                    document.querySelectorAll('.province-card.expanded').forEach(card => {
                        if (card !== provinceCard) {
                            card.classList.remove('expanded');
                        }
                    });
                    // Đảm bảo modal rank đang đóng nếu người dùng mở thẻ tỉnh
                    if (rankModal.style.display === 'flex') {
                        rankModal.style.display = 'none';
                    }
                    provinceCard.classList.toggle('expanded');
                }
            });

            // Lắng nghe sự kiện click trên từng mục địa điểm con
            const placesListElement = provinceCard.querySelector('.places-list');
            if (placesListElement) {
                placesListElement.addEventListener('click', (event) => {
                    const listItem = event.target.closest('li');
                    if (listItem) {
                        const placeId = listItem.dataset.placeId;
                        const place = province.places.find(p => p.id === placeId);
                        if (place) {
                            place.completed = !place.completed; // Chuyển đổi trạng thái
                            saveData(); // Lưu dữ liệu
                            calculateStats(); // Cập nhật thống kê

                            // Re-render the specific province card to update its progress bar and completed status
                            renderSingleProvinceCard(provinceId, provinceCard);
                        }
                    }
                });
            }
        }
        applyFadeInEffect();
    };

    // Hàm mới để render lại một thẻ tỉnh cụ thể (không cần tạo lại toàn bộ grid)
    const renderSingleProvinceCard = (provinceId, existingProvinceCardElement) => {
        const province = provincesData[provinceId];
        const completedPlaces = province.places.filter(place => place.completed).length;
        const totalPlaces = province.places.length;
        const progressPercentage = totalPlaces > 0 ? (completedPlaces / totalPlaces) * 100 : 0;

        // Cập nhật nội dung của thẻ tỉnh hiện có
        existingProvinceCardElement.querySelector('.places-visited').textContent = completedPlaces;
        existingProvinceCardElement.querySelector('.places-total').textContent = totalPlaces;
        existingProvinceCardElement.querySelector('.progress-bar').style.width = `${progressPercentage}%`;

        // Cập nhật danh sách địa điểm con
        const placesListElement = existingProvinceCardElement.querySelector('.places-list');
        if (placesListElement) {
            placesListElement.innerHTML = province.places.map(place => `
                <li class="${place.completed ? 'completed' : ''}" data-place-id="${place.id}">
                    <span>${place.name}</span>
                </li>
            `).join('');
        }

        // Cập nhật phần thưởng
        let rewardHtml = '';
        if (totalPlaces > 0 && completedPlaces === totalPlaces) {
            rewardHtml = `
                <div class="province-reward">
                    <h4>Chúc mừng bạn đã hoàn thành chuyến đi này! 🎉</h4>
                    <p>Bạn đã khám phá hết tất cả các địa điểm tại <span>${province.name}</span>.</p>
                </div>
            `;
        }
        const placesListContainer = existingProvinceCardElement.querySelector('.places-list-container');
        let existingRewardElement = placesListContainer.querySelector('.province-reward');

        if (rewardHtml) {
            if (!existingRewardElement) { // Nếu chưa có phần thưởng, thêm vào
                placesListContainer.insertAdjacentHTML('beforeend', rewardHtml);
            } else { // Nếu đã có, cập nhật nội dung
                existingRewardElement.outerHTML = rewardHtml; // Thay thế toàn bộ phần tử
            }
        } else {
            if (existingRewardElement) { // Nếu không có phần thưởng nhưng đang hiển thị, xóa đi
                existingRewardElement.remove();
            }
        }
    };

    // --- Rank Modal Functions ---
    const openRankModal = () => {
        rankListElement.innerHTML = ''; // Xóa nội dung cũ
        const currentScore = userData.score;
        const ranks = getRankList();

        // Populate the rank list
        ranks.forEach(rank => {
            const listItem = document.createElement('li');
            const isCurrentRank = currentScore >= rank.score &&
                (ranks.indexOf(rank) === ranks.length - 1 || currentScore < ranks[ranks.indexOf(rank) + 1].score);

            listItem.classList.toggle('current-rank-highlight', isCurrentRank);

            // Updated HTML structure for the simplified display: "Tên Rank: Điểm"
            listItem.innerHTML = `
                <span class="rank-name">${rank.name}</span>
                <span class="rank-min-score">${rank.score}+ Điểm</span>
            `;
            // Description is now omitted for brevity as per request
            // <span class="rank-description">${rank.description}</span>

            rankListElement.appendChild(listItem);
        });

        rankModal.style.display = 'flex'; // Hiển thị modal
        // Thu gọn tất cả các thẻ tỉnh đang mở khi mở modal
        document.querySelectorAll('.province-card.expanded').forEach(card => {
            card.classList.remove('expanded');
        });
    };

    const closeRankModal = () => {
        rankModal.style.display = 'none'; // Ẩn modal
    };

    // Event Listeners cho Rank Modal
    rankItem.addEventListener('click', openRankModal);
    closeRankModalBtn.addEventListener('click', closeRankModal);

    // Đóng modal khi click ra ngoài (ngoại trừ modal content)
    window.addEventListener('click', (event) => {
        if (event.target === rankModal) {
            closeRankModal();
        }
    });

    // --- Initial Setup ---
    loadData();
    calculateStats();
    renderProvinces(); // Render provinces after loading data

    // Đảm bảo ẩn modal khi tải trang - Đây là dòng quan trọng để loại bỏ việc modal tự hiện
    rankModal.style.display = 'none';

    // Ensure fade-in-on-scroll is applied to dynamically added elements
    const applyFadeInEffect = () => {
        const fadeElements = document.querySelectorAll('.fade-in-on-scroll:not(.is-visible)');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(element => {
            observer.observe(element);
        });
    };
    applyFadeInEffect(); // Apply on initial load
});
