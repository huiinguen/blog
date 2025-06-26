// travel.js (Updated)

document.addEventListener('DOMContentLoaded', () => {
    console.log('Travel Main JavaScript loaded!');

    // --- UI Elements ---
    const provincesGrid = document.getElementById('provinces-grid');
    const rankItem = document.getElementById('rank-item');
    const rankModal = document.getElementById('rank-modal');
    const closeRankModalBtn = document.getElementById('close-rank-modal');

    // --- State Management ---
    let userData = { score: 0 };

    // --- Data Management Functions ---
    const loadData = () => {
        const savedProgress = localStorage.getItem('travelProgress');
        if (savedProgress) {
            const parsedProgress = JSON.parse(savedProgress);
            for (const provinceId in provincesData) {
                if (parsedProgress && parsedProgress[provinceId]) {
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
            userData = JSON.parse(savedUserData);
        }
    };

    const saveData = () => {
        localStorage.setItem('travelProgress', JSON.stringify(provincesData));
        localStorage.setItem('travelUserData', JSON.stringify(userData));
    };

    // --- Core Logic Functions ---
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
        
        const oldScore = userData.score;
        userData.score = overallScore;
        
        updateStatsUI(totalCompletedProvinces, totalProvinces, userData.score, getRank(userData.score));
        
        // Check for milestone after updating score
        checkMilestone(userData.score, oldScore);
        
        saveData();
    };

    const handlePlaceToggle = (provinceId, placeId) => {
        const province = provincesData[provinceId];
        const place = province.places.find(p => p.id === placeId);
        if (place) {
            place.completed = !place.completed;
            calculateStats();
            
            // Re-render only the specific card that was changed
            const provinceCardElement = document.querySelector(`.province-card[data-province="${provinceId}"]`);
            if(provinceCardElement) {
                updateProvinceCardContent(provinceCardElement, provinceId, province);
            }
        }
    };
    
    // Make it accessible from travel-ui.js
    window.handlePlaceToggle = handlePlaceToggle;


    const handleCardExpand = (provinceCard) => {
        document.querySelectorAll('.province-card.expanded').forEach(card => {
            if (card !== provinceCard) {
                card.classList.remove('expanded');
            }
        });
        if (rankModal.style.display === 'flex') {
            closeRankModal();
        }
        provinceCard.classList.toggle('expanded');
    };

    // --- Initial Setup ---
    function initialize() {
        loadData();
        calculateStats();
        renderProvinces(provincesGrid, handlePlaceToggle, handleCardExpand);
        
        // Setup Event Listeners
        rankItem.addEventListener('click', () => openRankModal(userData.score));
        closeRankModalBtn.addEventListener('click', closeRankModal);
        window.addEventListener('click', (event) => {
            if (event.target === rankModal) {
                closeRankModal();
            }
        });

        rankModal.style.display = 'none';
        initializeMilestoneSystem(userData.score);
    }

    initialize();
});
// travel.js (Updated)

document.addEventListener('DOMContentLoaded', () => {
    console.log('Travel Main JavaScript loaded!');

    // --- UI Elements ---
    const provincesGrid = document.getElementById('provinces-grid');
    const rankItem = document.getElementById('rank-item');
    const rankModal = document.getElementById('rank-modal');
    const closeRankModalBtn = document.getElementById('close-rank-modal');
    // THÊM MỚI: Lấy element của thanh tìm kiếm
    const searchInput = document.getElementById('province-search-input');

    // ... (giữ nguyên các phần State Management, Data Management, Core Logic)

    // --- Initial Setup ---
    function initialize() {
        loadData();
        calculateStats();
        renderProvinces(provincesGrid, handlePlaceToggle, handleCardExpand);
        
        // Setup Event Listeners
        rankItem.addEventListener('click', () => openRankModal(userData.score));
        closeRankModalBtn.addEventListener('click', closeRankModal);
        window.addEventListener('click', (event) => {
            if (event.target === rankModal) {
                closeRankModal();
            }
        });

        // THÊM MỚI: Lắng nghe sự kiện input trên thanh tìm kiếm
        searchInput.addEventListener('input', () => {
            filterProvinces(searchInput.value);
        });

        rankModal.style.display = 'none';
        initializeMilestoneSystem(userData.score);
    }

    initialize();
});
// --- NEW: Share Achievement Feature ---
    const shareAchievementBtn = document.getElementById('share-achievement-btn');
    const statisticsBlock = document.getElementById('statistics-block-to-capture');
    const shareModal = document.getElementById('share-modal');
    const closeShareModalBtn = document.getElementById('close-share-modal');
    const screenshotPreview = document.getElementById('screenshot-preview');
    const shareFacebookBtn = document.getElementById('share-facebook');
    const shareTwitterBtn = document.getElementById('share-twitter');
    const shareZaloBtn = document.getElementById('share-zalo');
    const shareTelegramBtn = document.getElementById('share-telegram');

    let currentScreenshotDataUrl = ''; // Biến để lưu trữ Data URL của ảnh chụp

    if (shareAchievementBtn && statisticsBlock && shareModal) {
        shareAchievementBtn.addEventListener('click', async () => {
            // Tạm thời ẩn nút chia sẻ để nó không xuất hiện trong ảnh chụp
            shareAchievementBtn.style.display = 'none';

            // Đảm bảo phần tử hiển thị đầy đủ trước khi chụp (nếu có animation)
            await new Promise(resolve => setTimeout(resolve, 100));

            html2canvas(statisticsBlock, {
                backgroundColor: null,
                scale: 2, // Tăng độ phân giải ảnh chụp
                useCORS: true,
                logging: false // Tắt logging của html2canvas để console sạch hơn
            }).then(canvas => {
                currentScreenshotDataUrl = canvas.toDataURL('image/png'); // Lưu Data URL

                screenshotPreview.src = currentScreenshotDataUrl; // Hiển thị ảnh trong modal
                shareModal.style.display = 'flex'; // Hiển thị modal

                // Hiển thị lại nút chia sẻ
                shareAchievementBtn.style.display = 'flex';
                console.log('Achievement screenshot captured and ready for sharing!');
            }).catch(error => {
                console.error('Error capturing screenshot:', error);
                shareAchievementBtn.style.display = 'flex'; // Đảm bảo nút được hiển thị lại
                alert('Có lỗi xảy ra khi chụp ảnh màn hình. Vui lòng thử lại!');
            });
        });

        // Đóng modal chia sẻ
        closeShareModalBtn.addEventListener('click', () => {
            shareModal.style.display = 'none';
            currentScreenshotDataUrl = ''; // Xóa dữ liệu ảnh khi đóng modal
        });

        // Đóng modal khi click ra ngoài
        window.addEventListener('click', (event) => {
            if (event.target === shareModal) {
                shareModal.style.display = 'none';
                currentScreenshotDataUrl = '';
            }
        });

        // Khi click vào ảnh trong modal, tải ảnh về
        screenshotPreview.addEventListener('click', () => {
            if (currentScreenshotDataUrl) {
                const link = document.createElement('a');
                link.download = 'thanh_tich_hanh_trinh_cua_ban.png';
                link.href = currentScreenshotDataUrl;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                console.log('Screenshot downloaded via click!');
                // shareModal.style.display = 'none'; // Có thể đóng modal sau khi tải
            }
        });

       // Logic chia sẻ mạng xã hội (Messenger, TikTok, Native Share)
        const currentUrl = encodeURIComponent(window.location.href); // URL của trang hiện tại
        const shareText = "Tôi vừa đạt được thành tích mới trong hành trình khám phá Việt Nam! Cùng xem chuỗi điểm của tôi nhé!"; // Text chia sẻ

        // Messenger Share
        const shareMessengerBtn = document.getElementById('share-messenger');
        if (shareMessengerBtn) {
            shareMessengerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                // **QUAN TRỌNG: Để chia sẻ Messenger hoạt động, trang web của bạn PHẢI được chạy trên một máy chủ (ví dụ: localhost hoặc hosting thực),
                // và bạn cần một Facebook App ID hợp lệ đã được cấu hình.**
                // Thay 'YOUR_FACEBOOK_APP_ID' bằng App ID của bạn.
                // Nếu chạy từ file:// thì sẽ không hoạt động.
                const facebookAppId = 'YOUR_FACEBOOK_APP_ID'; // <--- THAY THẾ ID CỦA BẠN TẠI ĐÂY
                const messengerShareUrl = `https://www.facebook.com/dialog/send?app_id=${facebookAppId}&link=${currentUrl}&redirect_uri=${currentUrl}&display=popup`;
                
                if (window.location.protocol === 'file:') {
                    alert('Chia sẻ lên Messenger không hoạt động khi chạy từ file cục bộ (file://). Vui lòng chạy trang web trên máy chủ (ví dụ: Live Server).');
                    return;
                }
                if (facebookAppId === 'YOUR_FACEBOOK_APP_ID' || facebookAppId.length < 5) { // Kiểm tra xem đã thay App ID chưa
                     alert('Vui lòng thay "YOUR_FACEBOOK_APP_ID" bằng App ID Facebook của bạn trong travel.js để chia sẻ Messenger hoạt động.');
                     return;
                }

                window.open(messengerShareUrl, '_blank', 'width=600,height=400');
            });
        }

        // TikTok Share
        const shareTiktokBtn = document.getElementById('share-tiktok');
        if (shareTiktokBtn) {
            shareTiktokBtn.addEventListener('click', (e) => {
                e.preventDefault();
                // TikTok thường tập trung vào video và không hỗ trợ chia sẻ ảnh trực tiếp từ web qua URL đơn giản.
                // Người dùng sẽ cần tải ảnh về và sau đó tải lên ứng dụng TikTok thủ công.
                alert('Để chia sẻ ảnh lên TikTok, vui lòng tải ảnh về (nhấp vào ảnh trong cửa sổ này) và tải lên TikTok app thủ công.');
                // Có thể mở trang tải lên của TikTok, nhưng ảnh sẽ không tự động đính kèm
                // window.open(`https://www.tiktok.com/upload/?caption=${encodeURIComponent(shareText)}&url=${currentUrl}`, '_blank');
            });
        }

        // NEW: Web Share API (Chia sẻ qua ứng dụng native của thiết bị)
        const shareNativeBtn = document.getElementById('share-native');
        if (shareNativeBtn) {
            shareNativeBtn.addEventListener('click', async () => {
                // Kiểm tra xem trình duyệt có hỗ trợ Web Share API không
                if (navigator.share) {
                    try {
                        // Lưu ý: Việc chia sẻ ảnh Data URL trực tiếp qua navigator.share có thể không được hỗ trợ phổ biến.
                        // Cách đáng tin cậy nhất là chia sẻ text và URL của trang.
                        // Để chia sẻ ảnh, bạn cần chuyển Data URL thành Blob và thêm vào mảng files,
                        // nhưng không phải trình duyệt nào cũng hỗ trợ chia sẻ Blob qua API này.
                        // Vì vậy, chúng ta sẽ ưu tiên chia sẻ text và URL.

                        // Tùy chọn 1: Chia sẻ ảnh dưới dạng file (ít tương thích hơn)
                        // let filesArray = [];
                        // if (currentScreenshotDataUrl) {
                        //     const response = await fetch(currentScreenshotDataUrl);
                        //     const blob = await response.blob();
                        //     filesArray.push(new File([blob], 'thanh_tich_hanh_trinh.png', { type: 'image/png' }));
                        // }
                        
                        await navigator.share({
                            title: 'Thành Tích Du Lịch Của Tôi!',
                            text: shareText,
                            url: window.location.href, // Chia sẻ URL của trang hiện tại
                            // files: filesArray // Kích hoạt nếu muốn thử chia sẻ file, nhưng cần thử nghiệm kỹ
                        });
                        console.log('Nội dung đã được chia sẻ thành công qua Web Share API.');
                        // shareModal.style.display = 'none'; // Có thể đóng modal sau khi chia sẻ thành công
                    } catch (error) {
                        if (error.name === 'AbortError') {
                            console.log('Chia sẻ bị hủy.');
                        } else {
                            console.error('Lỗi khi chia sẻ qua Web Share API:', error);
                            alert('Không thể chia sẻ qua ứng dụng khác. Trình duyệt hoặc thiết bị của bạn có thể không hỗ trợ.');
                        }
                    }
                } else {
                    alert('Trình duyệt của bạn không hỗ trợ tính năng chia sẻ này. Vui lòng tải ảnh về và chia sẻ thủ công.');
                }
            });
        }
    }
