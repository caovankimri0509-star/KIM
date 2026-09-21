/**
 * KIM - Main JavaScript
 * Handles SPA Routing, Mobile Navigation, and Mock AI Processing
 */

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------
    // Mobile Navigation Toggle
    // -----------------------------------------------------
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // -----------------------------------------------------
    // SPA Router (Hash-based Routing)
    // -----------------------------------------------------
    const appContainer = document.getElementById('app');

    // Page Components
    const views = {
        home: `
            <div class="fade-in">
                <!-- Hero Section -->
                <section class="hero-section">
                    <div class="container hero-content">
                        <div class="hero-text text-center">
                            <h1 class="gradient-text">Bảo Vệ Bạn Trước Mọi Nguy Cơ Lừa Đảo Trực Tuyến</h1>
                            <p>KIM sử dụng AI để tự động phát hiện tin nhắn, email và đường link lừa đảo/phishing. Kiểm tra văn bản đáng ngờ ngay trong nháy mắt.</p>
                        </div>
                        
                        <div class="quick-check-wrapper glass-panel">
                            <h2><i class="fa-solid fa-magnifying-glass-chart"></i> Quét Nhanh Nội Dung / URL</h2>
                            <form id="quickCheckForm" class="quick-check-form">
                                <div class="input-group">
                                    <input type="text" id="quickCheckInput" placeholder="Dán tin nhắn Zalo, SMS, hoặc đường link nghi ngờ vào đây..." required autocomplete="off">
                                    <button type="submit" class="btn btn-primary"><i class="fa-solid fa-shield-cat"></i> Kiểm Tra Ngay</button>
                                </div>
                                <div class="quick-results" id="quickResults" style="display: none;">
                                    <!-- Result will be injected here -->
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <!-- Thống Kê / Live Stats -->
                <section class="stats-section">
                    <div class="container stats-grid">
                        <div class="stat-card glass-panel">
                            <i class="fa-solid fa-shield-virus"></i>
                            <h3 class="counter" data-target="152430">0</h3>
                            <p>Mối đe dọa đã chặn</p>
                        </div>
                        <div class="stat-card glass-panel">
                            <i class="fa-solid fa-users"></i>
                            <h3 class="counter" data-target="8645">0</h3>
                            <p>Người dùng được bảo vệ</p>
                        </div>
                        <div class="stat-card glass-panel">
                            <i class="fa-solid fa-bug"></i>
                            <h3 class="counter" data-target="2150">0</h3>
                            <p>Hình thức lừa đảo mới</p>
                        </div>
                    </div>
                </section>

                <!-- Cảnh Báo Nổi Bật -->
                <section class="alerts-section">
                    <div class="container">
                        <div class="section-header text-center">
                            <h2><i class="fa-solid fa-triangle-exclamation" style="color: var(--danger-color)"></i> Cảnh Báo Lừa Đảo Tuần Này</h2>
                            <p>Những hình thức lừa đảo đang bùng phát mà bạn cần đặc biệt lưu ý</p>
                        </div>
                        <div class="alerts-grid">
                            <div class="alert-card glass-panel danger-border">
                                <div class="alert-tag">Nguy hiểm cao</div>
                                <h3>Giả danh công an gọi Video Deepfake</h3>
                                <p>Đối tượng giả danh cán bộ công an yêu cầu cài đặt ứng dụng Dịch vụ công giả mạo để chiếm đoạt tài khoản ngân hàng.</p>
                                <a href="#knowledge" class="btn btn-sm btn-outline">Tìm hiểu thêm</a>
                            </div>
                            <div class="alert-card glass-panel warning-border">
                                <div class="alert-tag warning">Cảnh Giác</div>
                                <h3>Tuyển dụng CTV Shopee, Lazada</h3>
                                <p>Tin nhắn viber/zalo "Việc nhẹ lương cao" yêu cầu nạp tiền để làm nhiệm vụ chốt đơn ảo.</p>
                                <a href="#knowledge" class="btn btn-sm btn-outline">Tìm hiểu thêm</a>
                            </div>
                            <div class="alert-card glass-panel danger-border">
                                <div class="alert-tag">Rất phổ biến</div>
                                <h3>Tin nhắn SMS Brandname giả mạo</h3>
                                <p>Tin nhắn từ tên người gửi là Vietcombank, Sacombank... chứa link độc hại thông báo tài khoản bị khóa.</p>
                                <a href="#knowledge" class="btn btn-sm btn-outline">Tìm hiểu thêm</a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- How it works -->
                <section class="how-it-works-section">
                    <div class="container">
                        <div class="section-header text-center">
                            <h2>Quy Trình Hoạt Động</h2>
                            <p>3 bước đơn giản để giữ an toàn trên không gian mạng</p>
                        </div>
                        <div class="steps-container">
                            <div class="step-box">
                                <div class="step-icon"><i class="fa-solid fa-paste"></i></div>
                                <h3>1. Dán Nội Dung</h3>
                                <p>Copy tin nhắn rác, email nghi ngờ hoặc link lạ vào ô kiếm tra nhanh.</p>
                            </div>
                            <div class="step-connector"></div>
                            <div class="step-box">
                                <div class="step-icon glow"><i class="fa-solid fa-brain"></i></div>
                                <h3>2. AI Phân Tích</h3>
                                <p>Hệ thống Machine Learning phân tích ngữ nghĩa, hình thức và đối chiếu Blacklist toàn cầu.</p>
                            </div>
                            <div class="step-connector"></div>
                            <div class="step-box">
                                <div class="step-icon success"><i class="fa-solid fa-check-shield"></i></div>
                                <h3>3. Nhận Kết Quả</h3>
                                <p>Nhận điểm số rủi ro và các lời khuyên xử lý an toàn ngay lập tức.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `,
        analyzer: `
            <div class="container fade-in page-header">
                <div class="text-center section-header">
                    <h1 class="gradient-text">Trung Tâm Phân Tích Chuyên Sâu</h1>
                    <p>Sức mạnh AI phân tích đa chiều giúp bạn đánh giá rủi ro của mọi loại nội dung.</p>
                </div>

                <div class="analyzer-wrapper">
                    <!-- Input Section -->
                    <div class="glass-panel analyzer-input">
                        <div class="tabs">
                            <button class="tab-btn active" data-tab="text"><i class="fa-solid fa-align-left"></i> Văn Bản / SMS</button>
                            <button class="tab-btn" data-tab="url"><i class="fa-solid fa-link"></i> URL Website</button>
                            <button class="tab-btn" data-tab="image"><i class="fa-solid fa-image"></i> Hình Ảnh (Beta)</button>
                        </div>
                        
                        <div class="tab-content active" id="tab-text">
                            <textarea id="analyzeText" rows="6" placeholder="Dán nội dung tin nhắn, email bạn nghi ngờ vào đây..."></textarea>
                        </div>
                        <div class="tab-content" id="tab-url" style="display: none;">
                            <input type="url" id="analyzeUrl" placeholder="Ví dụ: https://kiemtiennhanh.com/dang-ky">
                        </div>
                        <div class="tab-content" id="tab-image" style="display: none;">
                            <div class="upload-area" id="uploadArea">
                                <i class="fa-solid fa-cloud-arrow-up fa-2x"></i>
                                <p>Kéo thả hoặc <span>click để tải ảnh</span> màn hình tin nhắn lên.</p>
                                <input type="file" hidden id="analyzeUpload" accept="image/*">
                            </div>
                        </div>

                        <div class="action-bar mt-4">
                            <button id="btnAnalyze" class="btn btn-primary w-100"><i class="fa-solid fa-microchip"></i> Bắt Đầu Phân Tích</button>
                        </div>
                    </div>

                    <!-- Results Section -->
                    <div class="glass-panel analyzer-result mt-4" id="analyzerResult" style="display: none;">
                        <div class="processing-state text-center" id="processingState">
                            <i class="fa-solid fa-gear fa-spin fa-3x" style="color: var(--accent-primary)"></i>
                            <h3 class="mt-4">AI đang tiến hành quét...</h3>
                            <div class="progress-bar-bg mt-3">
                                <div class="progress-bar-fill" id="scanProgress"></div>
                            </div>
                            <p class="mt-2 text-secondary" id="scanLog">Đang đối chiếu dữ liệu Blacklist...</p>
                        </div>

                        <div class="dashboard-state" id="dashboardState" style="display: none;">
                            <div class="score-header text-center">
                                <div class="risk-circle" id="riskCircle">
                                    <h2 id="riskScoreVal">0%</h2>
                                    <span>Rủi Ro</span>
                                </div>
                                <h3 id="riskTitle" class="mt-3">---</h3>
                            </div>

                            <div class="results-grid mt-4">
                                <div class="signs-box">
                                    <h4><i class="fa-solid fa-magnifying-glass"></i> Dấu Hiệu Phát Hiện</h4>
                                    <ul class="signs-list" id="signsList"></ul>
                                </div>
                                <div class="advice-box">
                                    <h4><i class="fa-solid fa-user-shield"></i> Khuyến Nghị Hành Động</h4>
                                    <ul class="advice-list" id="adviceList"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        report: `
            <div class="container fade-in page-header">
                <div class="text-center section-header">
                    <h1 class="gradient-text">Báo Cáo Lừa Đảo</h1>
                    <p>Chung tay xây dựng cộng đồng an toàn bằng cách báo cáo các hình thức lừa đảo mới.</p>
                </div>
                
                <div class="glass-panel report-form-wrapper" style="max-width: 700px; margin: 0 auto;">
                    <form id="scamReportForm">
                        <div class="form-group mt-3">
                            <label>Bạn đã bị lừa đảo qua kênh nào?</label>
                            <select id="reportChannel" required>
                                <option value="">-- Chọn kênh --</option>
                                <option value="sms">Tin nhắn SMS</option>
                                <option value="zalo">Zalo / Viber / Telegram</option>
                                <option value="facebook">Facebook / Messenger</option>
                                <option value="email">Email</option>
                                <option value="call">Cuộc gọi điện thoại</option>
                            </select>
                        </div>
                        
                        <div class="form-group mt-3">
                            <label>Số điện thoại / Email / Tên người gửi:</label>
                            <input type="text" placeholder="Ví dụ: +84 123 456 789 hoặc hieu.nguyen@scam.vn" required>
                        </div>
                        
                        <div class="form-group mt-3">
                            <label>Nội dung lừa đảo hoặc đường link (URL):</label>
                            <textarea rows="4" placeholder="Dán nội dung tin nhắn hoặc đường link nghi ngờ vào đây..." required></textarea>
                        </div>
                        
                        <div class="form-group mt-3">
                            <label>Tải lên bằng chứng (Ảnh chụp màn hình):</label>
                            <input type="file" accept="image/*">
                        </div>

                        <div class="form-group mt-3 checkbox-group">
                            <input type="checkbox" id="confirmTruth" required>
                            <label for="confirmTruth">Tôi cam đoan những thông tin cung cấp ở trên là hoàn toàn đúng sự thật.</label>
                        </div>

                        <div class="action-bar mt-4 text-center">
                            <button type="submit" class="btn btn-primary" id="btnSubmitReport"><i class="fa-solid fa-paper-plane"></i> Gửi Báo Cáo</button>
                        </div>
                    </form>
                    <div id="reportSuccess" style="display: none;" class="text-center">
                        <i class="fa-solid fa-circle-check fa-4x" style="color: var(--safe-color); margin-bottom: 1rem;"></i>
                        <h2 style="color: var(--safe-color);">Gửi báo cáo thành công!</h2>
                        <p class="mt-3">Cảm ơn bạn đã đóng góp. Đội ngũ kiểm duyệt hệ thống KIM sẽ xác minh thông tin và cập nhật vào cơ sở dữ liệu chung.</p>
                        <button class="btn btn-outline mt-4" onclick="window.location.hash='home'">Về Trang Chủ</button>
                    </div>
                </div>
            </div>
        `,
        knowledge: `
            <div class="container fade-in page-header">
                <div class="text-center section-header">
                    <h1 class="gradient-text">Cẩm Nang An Ninh Mạng</h1>
                    <p>Trang bị kiến thức để tự bảo vệ bản thân trên không gian số.</p>
                </div>

                <div class="knowledge-grid mt-4">
                    <div class="glass-panel">
                        <h2 class="mb-3 text-warning"><i class="fa-solid fa-truck-fast"></i> Hướng Dẫn Khẩn Cấp</h2>
                        <p>Bạn phải làm gì khi HIỂU mình ĐÃ VỪA BỊ LỪA ĐẢO / BẤM VÀO LINK ĐỘC?</p>
                        <ul class="emergency-list mt-3">
                            <li><span class="step-num">1</span> Khóa thẻ & tài khoản ngân hàng ngay lập tức.</li>
                            <li><span class="step-num">2</span> Thay đổi mật khẩu toàn bộ MXH, Email.</li>
                            <li><span class="step-num">3</span> Không chuyển thêm tiền cho kẻ gian với hy vọng "lấy lại vốn".</li>
                            <li><span class="step-num">4</span> Thông báo cho người thân, bạn bè biết để không bị giả danh vay tiền.</li>
                            <li><span class="step-num">5</span> Thu thập bằng chứng và báo cáo cơ quan công an / KIM.</li>
                        </ul>
                    </div>

                    <div class="glass-panel quiz-section text-center">
                        <h2><i class="fa-solid fa-graduation-cap"></i> Trắc Nghiệm Nhận Biết</h2>
                        <p class="mt-2">Bạn có tự tin mình có thể nhận ra mọi tin nhắn lừa đảo?</p>
                        <div class="quiz-container mt-4" id="quizContainer">
                            <!-- Quiz content injected via JS -->
                        </div>
                    </div>
                </div>

                <h3 class="mt-4 mb-3"><i class="fa-solid fa-book-open"></i> Bài Viết Chuyên Sâu</h3>
                <div class="alerts-grid">
                    <div class="alert-card glass-panel text-left">
                        <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80" alt="Card img" style="width:100%; border-radius:8px; margin-bottom:1rem;">
                        <h3>Chiêu Trò Deepfake Gọi Video Giả Danh</h3>
                        <p>Deepfake đang trở thành vũ khí nguy hiểm để kẻ gian làm giả khuôn mặt, giọng nói của người nhà yêu cầu chuyển tiền vay gấp.</p>
                        <a class="btn btn-sm btn-outline mt-2">Đọc Tiếp</a>
                    </div>
                    <div class="alert-card glass-panel text-left">
                        <img src="https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=400&q=80" alt="Card img" style="width:100%; border-radius:8px; margin-bottom:1rem;">
                        <h3>Bẫy "Việc Nhẹ Lương Cao" CTV Shopee</h3>
                        <p>Khám phá cách kẻ lừa đảo xây dựng một chuỗi nhiệm vụ "dễ ăn" để bạn nạp ngày càng nhiều tiền rồi không thể rút ra được.</p>
                        <a class="btn btn-sm btn-outline mt-2">Đọc Tiếp</a>
                    </div>
                </div>
            </div>
        `,
        dashboard: `
            <div class="container fade-in page-header">
                <div class="text-center section-header">
                    <h1 class="gradient-text">Tài Khoản & Lịch Sử</h1>
                    <p>Quản lý lịch sử kiểm tra và cài đặt bảo mật cá nhân của bạn.</p>
                </div>

                <div class="dashboard-grid mt-4">
                    <div class="glass-panel profile-sidebar text-center">
                        <div class="avatar"><i class="fa-solid fa-user-astronaut"></i></div>
                        <h3 class="mt-3">User_841293</h3>
                        <p class="text-secondary">Thành viên từ 10/2026</p>
                        
                        <div class="settings-list mt-4 text-left">
                            <label class="setting-item">
                                <span>Nhận cảnh báo qua Email</span>
                                <input type="checkbox" checked class="toggle-switch">
                            </label>
                            <label class="setting-item mt-3">
                                <span>Nhận tin nhắn Telegram</span>
                                <input type="checkbox" class="toggle-switch">
                            </label>
                        </div>
                    </div>
                    
                    <div class="glass-panel history-main">
                        <h3 class="mb-3"><i class="fa-solid fa-clock-rotate-left"></i> Lịch Sử Quét Gần Đây</h3>
                        <div class="history-list">
                            <div class="history-item">
                                <i class="fa-solid fa-link text-warning"></i>
                                <div class="h-content">
                                    <p>https://tuyendung-shopee.vn</p>
                                    <span class="date">Vừa xong</span>
                                </div>
                                <span class="badge badge-warning">Rủi ro trung bình</span>
                            </div>
                            <div class="history-item mt-3">
                                <i class="fa-solid fa-envelope text-danger"></i>
                                <div class="h-content">
                                    <p>[Sacombank] Tài khoản bị khóa, vui lòng...</p>
                                    <span class="date">Hôm qua</span>
                                </div>
                                <span class="badge badge-danger">Lừa đảo 98%</span>
                            </div>
                            <div class="history-item mt-3">
                                <i class="fa-solid fa-message" style="color: var(--safe-color)"></i>
                                <div class="h-content">
                                    <p>Sếp báo chuyển 5 triệu vào tài khoản này...</p>
                                    <span class="date">3 ngày trước</span>
                                </div>
                                <span class="badge badge-safe">An toàn</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        privacy: `
            <div class="container fade-in page-header">
                <div class="glass-panel" style="max-width: 800px; margin: 0 auto;">
                    <div class="text-center mb-4">
                        <h1 class="gradient-text">Chính Sách Bảo Mật & Điều Khoản</h1>
                        <p>Cập nhật lần cuối: Tháng 10, 2026</p>
                    </div>

                    <div class="legal-content">
                        <h3>1. Cam kết bảo mật dữ liệu tuyệt đối</h3>
                        <p>Hệ thống KIM <b>KHÔNG</b> lưu trữ nội dung tin nhắn, email hoặc hình ảnh cá nhân mà bạn tải lên để phân tích. Toàn bộ quá trình quét diễn ra bằng AI trên máy chủ ẩn danh và dữ liệu được xóa ngay sau khi trả kết quả.</p>
                        <p>Chúng tôi không bao giờ chia sẻ, bán hoặc chuyển giao dữ liệu nhạy cảm của bạn cho bất kỳ bên thứ ba nào.</p>

                        <h3 class="mt-4">2. Điều khoản sử dụng</h3>
                        <p>Nền tảng này áp dụng công nghệ Machine Learning để đánh giá rủi ro. Tuy nhiên, kết quả chỉ mang tính chất <b>tham khảo và hỗ trợ quyết định</b>. Chúng tôi không chịu trách nhiệm pháp lý nếu người dùng vẫn thực hiện giao dịch hoặc thao tác dựa trên các khuyến nghị từ hệ thống.</p>

                        <h3 class="mt-4">3. Quản lý cảnh báo và Đóng góp cộng đồng</h3>
                        <p>Mọi báo cáo lừa đảo do người dùng đóng góp sẽ được ẩn danh hoàn toàn (trừ khi có sự đồng ý) và chỉ được sử dụng cho mục đích cập nhật Blacklist cảnh báo cộng đồng.</p>
                    </div>
                    <div class="text-center mt-4">
                        <button class="btn btn-primary" onclick="window.location.hash='home'">Đồng Ý & Trở Về Trang Chủ</button>
                    </div>
                </div>
            </div>
        `
    };

    function router() {
        // Get the hash without #
        let hash = window.location.hash.slice(1) || 'home';

        // Render view
        if (views[hash]) {
            appContainer.innerHTML = views[hash];
        } else {
            appContainer.innerHTML = views['home'];
            hash = 'home';
        }

        // Update Navigation Active State
        const links = document.querySelectorAll('nav .nav-links a');
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${hash}`) {
                link.classList.add('active');
            }
        });

        // Close mobile menu on navigate
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }

        // Scroll to top
        window.scrollTo(0, 0);

        // Re-initialize specific page scripts
        initPageScripts(hash);
    }

    // Additional page-specific JS initializations
    function initPageScripts(pageStr) {
        if (pageStr === 'home') {
            // Setup Counters
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                counter.innerText = '0';
                const updateCounter = () => {
                    const target = +counter.getAttribute('data-target');
                    const c = +counter.innerText;
                    const increment = target / 200;
                    if (c < target) {
                        counter.innerText = `${Math.ceil(c + increment)}`;
                        setTimeout(updateCounter, 10);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };
                // Adding a small delay for visual effect
                setTimeout(updateCounter, 500);
            });

            // Quick Check Form Logic
            const form = document.getElementById('quickCheckForm');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const input = document.getElementById('quickCheckInput').value.toLowerCase();
                    const results = document.getElementById('quickResults');
                    const btn = form.querySelector('button');

                    if (!input) return;

                    // Loading State
                    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Đang Phân Tích...';
                    btn.disabled = true;
                    results.style.display = 'none';

                    // Mock API Delay
                    setTimeout(() => {
                        let score = 0;
                        let statusClass = 'safe';
                        let message = 'An toàn';
                        let details = 'Nội dung này hiện không có dấu hiệu lừa đảo trong cơ sở dữ liệu của chúng tôi.';

                        // Simple rules to simulate phishing detection
                        if (input.includes('khóa') || input.includes('ngân hàng') || input.includes('otp')) {
                            score = 85;
                            statusClass = 'danger';
                            message = 'Rất Nguy Hiểm!';
                            details = 'Chứa các từ khóa nhạy cảm thường dùng trong tin nhắn giả mạo ngân hàng. Tuyệt đối KHÔNG ấn vào link hoặc cung cấp mã OTP.';
                        } else if (input.includes('trúng thưởng') || input.includes('việc nhẹ') || input.includes('ctv')) {
                            score = 75;
                            statusClass = 'danger';
                            message = 'Cảnh Báo Lừa Đảo!';
                            details = 'Có dấu hiệu của lừa đảo chiếm đoạt tài sản qua hình thức tuyển dụng CTV hoặc trúng thưởng giả mạo.';
                        } else if (input.includes('http') || input.includes('.com') || input.includes('.vn')) {
                            score = 40;
                            statusClass = 'warning';
                            message = 'Đường Link Chứa Rủi Ro';
                            details = 'Dù chưa nằm trong danh sách đen, hãy luôn cẩn trọng khi bấm vào bất kỳ đường link lạ nào.';
                        }

                        // Render Result
                        results.innerHTML = `
                            <div class="result-card ${statusClass}">
                                <div class="result-header">
                                    <h4>${message}</h4>
                                    <span class="score">Rủi ro: ${score}%</span>
                                </div>
                                <p>${details}</p>
                                <a href="#analyzer" class="btn btn-sm btn-outline">Phân Tích Chi Tiết Hơn</a>
                            </div>
                        `;
                        results.style.display = 'block';

                        // Reset button
                        btn.innerHTML = '<i class="fa-solid fa-shield-cat"></i> Kiểm Tra Ngay';
                        btn.disabled = false;
                    }, 1500);
                });
            }
        } else if (pageStr === 'analyzer') {
            // Tabs logic
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            let currentType = 'text';

            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.style.display = 'none');
                    btn.classList.add('active');
                    currentType = btn.getAttribute('data-tab');
                    document.getElementById('tab-' + currentType).style.display = 'block';
                });
            });

            // Upload Area logic (Mock)
            const uploadArea = document.getElementById('uploadArea');
            const fileInput = document.getElementById('analyzeUpload');
            if (uploadArea) {
                uploadArea.addEventListener('click', () => fileInput.click());
                fileInput.addEventListener('change', () => {
                    if (fileInput.files.length > 0) {
                        uploadArea.innerHTML = `<i class="fa-solid fa-image fa-2x" style="color: var(--safe-color)"></i><p>Ảnh đã được tải lên: ${fileInput.files[0].name}</p>`;
                    }
                });
            }

            // Analysis Logic
            const btnAnalyze = document.getElementById('btnAnalyze');
            const resultBox = document.getElementById('analyzerResult');
            const processingState = document.getElementById('processingState');
            const dashboardState = document.getElementById('dashboardState');

            if (btnAnalyze) {
                btnAnalyze.addEventListener('click', () => {
                    let inputData = '';
                    if (currentType === 'text') inputData = document.getElementById('analyzeText').value;
                    if (currentType === 'url') inputData = document.getElementById('analyzeUrl').value;
                    if (currentType === 'image' && fileInput.files.length > 0) inputData = 'image_uploaded';

                    if (!inputData) return alert('Vui lòng cung cấp nội dung cần kiểm tra!');

                    // Show Processing
                    resultBox.style.display = 'block';
                    processingState.style.display = 'block';
                    dashboardState.style.display = 'none';
                    btnAnalyze.disabled = true;

                    // Progress Bar animation
                    const progressFill = document.getElementById('scanProgress');
                    const scanLog = document.getElementById('scanLog');
                    const logs = [
                        'Đang tải mô hình NLP...',
                        'Kiểm tra cấu trúc ngữ pháp...',
                        'Đối chiếu cơ sở dữ liệu Blacklist toàn cầu...',
                        'Đánh giá URL và domain...',
                        'Hoàn tất phân tích biểu đồ hành vi...'
                    ];

                    let progress = 0;
                    let logIdx = 0;
                    const interval = setInterval(() => {
                        progress += 2;
                        progressFill.style.width = progress + '%';

                        if (progress % 20 === 0 && logIdx < logs.length) {
                            scanLog.innerText = logs[logIdx];
                            logIdx++;
                        }

                        if (progress >= 100) {
                            clearInterval(interval);
                            showDashboard(inputData.toLowerCase());
                        }
                    }, 40);
                });
            }

            function showDashboard(input) {
                processingState.style.display = 'none';
                dashboardState.style.display = 'block';
                btnAnalyze.disabled = false;

                let score = 5;
                let color = 'var(--safe-color)';
                let title = 'An Toàn';
                let signs = ['Không phát hiện từ khóa khả nghi.', 'Cấu trúc thông điệp bình thường.'];
                let advices = ['Bạn có thể tin tưởng nội dung này.', 'Vẫn luôn cảnh giác nếu yêu cầu chuyển tiền.'];

                if (input.includes('khóa') || input.includes('bảo mật') || input.includes('ngân hàng') || input.includes('otp')) {
                    score = 92;
                    color = 'var(--danger-color)';
                    title = 'Nguy Hiểm Cấp Độ Cao';
                    signs = [
                        '<span class="text-danger">Khai thác tâm lý sợ hãi (cảnh báo khóa tài khoản).</span>',
                        '<span class="text-danger">Ngôn ngữ giả danh cơ quan/tổ chức tài chính.</span>',
                        '<span class="text-danger">Yêu cầu cung cấp thông tin xác thực nhạy cảm.</span>'
                    ];
                    advices = [
                        'Tuyệt đối <b>KHÔNG</b> ấn vào bất kỳ liên kết nào.',
                        'Tuyệt đối <b>KHÔNG</b> cung cấp mã OTP hay mật khẩu.',
                        'Liên hệ trực tiếp với ngân hàng qua Hotline chính thức nếu nghi ngờ.'
                    ];
                } else if (input.includes('trúng') || input.includes('qua') || input.includes('quà') || input.includes('việc nhẹ')) {
                    score = 78;
                    color = 'var(--danger-color)';
                    title = 'Cảnh Báo Lừa Đảo';
                    signs = [
                        '<span class="text-warning">Lợi dụng lòng tham, hứa hẹn phần thưởng bất thường.</span>',
                        '<span class="text-warning">Gợi ý làm nhiệm vụ dễ dàng để kiếm tiền.</span>'
                    ];
                    advices = [
                        'Chặn số người gửi và xóa tin nhắn ngay lập tức.',
                        'Báo cáo số điện thoại/Zalo này qua chức năng "Báo cáo" của ứng dụng.'
                    ];
                }

                // Render Score Circle
                const riskCircle = document.getElementById('riskCircle');
                const riskScoreVal = document.getElementById('riskScoreVal');
                const riskTitle = document.getElementById('riskTitle');

                riskCircle.style.borderColor = color;
                riskCircle.style.boxShadow = `0 0 20px ${color.replace(')', ', 0.3)').replace('rgb', 'rgba')}`;
                riskScoreVal.style.color = color;

                // Animate score number
                let curScore = 0;
                const scoreInterval = setInterval(() => {
                    curScore += 2;
                    if (curScore >= score) {
                        curScore = score;
                        clearInterval(scoreInterval);
                    }
                    riskScoreVal.innerText = curScore + '%';
                }, 20);

                riskTitle.innerText = title;
                riskTitle.style.color = color;

                // Render lists
                document.getElementById('signsList').innerHTML = signs.map(s => `<li><i class="fa-solid fa-caret-right"></i> ${s}</li>`).join('');
                document.getElementById('adviceList').innerHTML = advices.map(a => `<li><i class="fa-solid fa-check"></i> ${a}</li>`).join('');
            }
        } else if (pageStr === 'report') {
            const form = document.getElementById('scamReportForm');
            const successDiv = document.getElementById('reportSuccess');
            const btn = document.getElementById('btnSubmitReport');

            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang Xử Lý...';
                    btn.disabled = true;

                    // Mock API Submission
                    setTimeout(() => {
                        form.style.display = 'none';
                        successDiv.style.display = 'block';
                    }, 1200);
                });
            }
        } else if (pageStr === 'knowledge') {
            const quizContainer = document.getElementById('quizContainer');
            if (quizContainer) {
                const questionHTML = `
                    <div class="quiz-question">
                        <h4>Tình huống:</h4>
                        <div class="mock-sms">
                            <p><b>[Vietcombank]</b> Tai khoan cua ban se bi tam khoa vao luc 21h do bat thuong. Truy cap phientuycap-vcb.com de mo khoa ngay!</p>
                        </div>
                        <p class="mt-3 text-secondary">Tin nhắn này là an toàn hay lừa đảo?</p>
                        <div class="quiz-options mt-3">
                            <button class="btn btn-outline quiz-btn w-100 mb-2" data-answer="safe">An toàn, đó là tin nhắn chính thức</button>
                            <button class="btn btn-outline quiz-btn w-100 danger-hover" data-answer="scam">Lừa đảo (Phishing)</button>
                        </div>
                    </div>
                `;
                quizContainer.innerHTML = questionHTML;

                const btns = quizContainer.querySelectorAll('.quiz-btn');
                btns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        btns.forEach(b => b.disabled = true);
                        if (btn.getAttribute('data-answer') === 'scam') {
                            btn.style.background = 'var(--safe-color)';
                            btn.style.color = '#000';
                            btn.innerHTML = '<i class="fa-solid fa-check"></i> Chính xác! Đây là tin giả mạo.';
                        } else {
                            btn.style.background = 'var(--danger-color)';
                            btn.style.borderColor = 'var(--danger-color)';
                            btn.innerHTML = '<i class="fa-solid fa-xmark"></i> Sai rồi! Link trong tin nhắn là giả mạo.';
                        }
                        const explanation = document.createElement('p');
                        explanation.className = 'mt-3 text-secondary test-explanation fade-in';
                        explanation.innerText = 'Dấu hiệu: Ngân hàng không bao giờ bắt ép truy cập đường link qua SMS. Tên miền phientuycap-vcb.com là giả mạo.';
                        quizContainer.appendChild(explanation);
                    });
                });
            }
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial route setup
    router();
});
