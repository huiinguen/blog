document.addEventListener('DOMContentLoaded', () => {
    // Ví dụ: Có thể thêm logic cho menu responsive tại đây
    // Nếu bạn có một nút menu burger, bạn có thể thêm sự kiện click vào nó.
    console.log('Main JavaScript loaded!');

    // Logic tải header/footer nếu bạn quyết định dùng cách này
    // Lưu ý: Đối với việc phát triển cục bộ, bạn có thể cần mở trình duyệt với cờ --allow-file-access-from-files
    // hoặc sử dụng một local server (ví dụ: Live Server của VS Code) để tránh lỗi CORS.
    /*
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        fetch('/components/header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading header:', error));
    }

    if (footerPlaceholder) {
        fetch('/components/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }
    */
});
document.addEventListener('DOMContentLoaded', () => {
    // Ví dụ: Có thể thêm logic cho menu responsive tại đây
    // Nếu bạn có một nút menu burger, bạn có thể thêm sự kiện click vào nó.
    console.log('Main JavaScript loaded!');
});
