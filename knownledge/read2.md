<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập - SQL Mastery</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <style>
        body { font-family: 'Inter', sans-serif; }
        
        /* Floating Animations */
        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes float-delay {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(15px) rotate(-2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes pulse-glow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 7s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        
        /* Custom Scrollbar for hidden elements */
        .hide-scrollbar::-webkit-scrollbar { display: none; }
    </style>
</head>
<body class="bg-slate-50 h-screen w-full overflow-hidden text-slate-800">

    <div class="flex h-full w-full">
        
        <!-- TRÁI: GIỚI THIỆU & ANIMATION (Ẩn trên mobile, hiện trên màn hình lớn) -->
        <div class="hidden lg:flex w-1/2 relative overflow-hidden bg-[#0f172a] items-center justify-center flex-col p-12 z-0">
            <!-- Background Glows -->
            <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-30 animate-pulse-glow"></div>
            <div class="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-30 animate-pulse-glow" style="animation-delay: 2s;"></div>
            
            <div class="relative z-10 w-full max-w-lg">
                <!-- Branding -->
                <div class="flex items-center gap-3 font-black text-3xl text-white tracking-tight mb-8">
                    <div class="bg-blue-600 text-white p-2 rounded-xl shadow-lg shadow-blue-600/30">
                        <i data-lucide="terminal" class="w-8 h-8"></i>
                    </div>
                    SQL<span class="text-blue-500 font-light">Mastery</span>
                </div>

                <h1 class="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                    Làm chủ cơ sở dữ liệu <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">từ con số 0.</span>
                </h1>
                
                <p class="text-slate-300 text-lg leading-relaxed mb-12 border-l-4 border-blue-500 pl-4 font-medium">
                    Nền tảng học SQL trực quan nhất. Code trực tiếp trên Terminal giả lập, theo dõi tiến trình học tập chuyên sâu và được hỗ trợ sửa lỗi 1-kèm-1 bởi AI (Gemini).
                </p>

                <!-- Floating Abstract UI Elements -->
                <div class="relative h-64 w-full mt-4">
                    <!-- Element 1 -->
                    <div class="absolute top-0 left-4 bg-[#1e293b] border border-slate-700/50 p-4 rounded-2xl shadow-2xl animate-float backdrop-blur-md w-64">
                        <div class="flex items-center gap-3 mb-3 border-b border-slate-700 pb-2">
                            <i data-lucide="database" class="w-5 h-5 text-blue-400"></i>
                            <span class="text-xs font-bold text-slate-300 uppercase tracking-widest">Query Result</span>
                        </div>
                        <div class="space-y-2">
                            <div class="h-2 w-3/4 bg-slate-700 rounded-full"></div>
                            <div class="h-2 w-1/2 bg-slate-700 rounded-full"></div>
                            <div class="h-2 w-5/6 bg-slate-700 rounded-full"></div>
                        </div>
                    </div>

                    <!-- Element 2 -->
                    <div class="absolute top-20 right-4 bg-gradient-to-br from-blue-600 to-indigo-700 p-5 rounded-2xl shadow-xl shadow-blue-900/40 animate-float-delay w-56">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-white font-bold text-sm">Hiệu suất học</span>
                            <i data-lucide="rocket" class="w-5 h-5 text-blue-200"></i>
                        </div>
                        <div class="flex items-end gap-2 h-12">
                            <div class="w-1/4 bg-white/20 h-1/3 rounded-t-sm"></div>
                            <div class="w-1/4 bg-white/40 h-2/3 rounded-t-sm"></div>
                            <div class="w-1/4 bg-white/60 h-1/2 rounded-t-sm"></div>
                            <div class="w-1/4 bg-white h-full rounded-t-sm"></div>
                        </div>
                    </div>

                    <!-- Element 3 -->
                    <div class="absolute -bottom-4 left-24 bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-lg animate-float" style="animation-delay: 1.5s;">
                        <code class="text-emerald-300 text-xs font-mono">SELECT * FROM future_job;</code>
                    </div>
                </div>
            </div>
        </div>

        <!-- PHẢI: FORM ĐĂNG NHẬP / QUÊN MẬT KHẨU -->
        <div class="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 sm:p-12 relative overflow-y-auto hide-scrollbar">
            
            <!-- Mobile Branding -->
            <div class="absolute top-8 left-8 lg:hidden flex items-center gap-2 font-black text-xl text-slate-900 tracking-tight">
                <div class="bg-blue-600 text-white p-1.5 rounded-lg shadow-sm">
                    <i data-lucide="terminal" class="w-5 h-5"></i>
                </div>
                SQL<span class="text-blue-600 font-light">Mastery</span>
            </div>

            <!-- VIEW 1: ĐĂNG NHẬP -->
            <div id="loginView" class="w-full max-w-md space-y-8 mt-12 lg:mt-0 animate-fade-in">
                <div class="text-center lg:text-left">
                    <h2 class="text-3xl font-black text-slate-900 mb-2 tracking-tight">Đăng Nhập 👋</h2>
                    <p class="text-slate-500 font-medium">Đăng nhập để chinh phục hành trình làm chủ dữ liệu của bạn.</p>
                </div>

                <!-- Form đăng nhập -->
                <form id="loginForm" class="space-y-5" onsubmit="handleLogin(event)">
                    <div class="space-y-1">
                        <label class="text-sm font-bold text-slate-700">Email cá nhân</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i data-lucide="mail" class="w-5 h-5 text-slate-400"></i>
                            </div>
                            <input type="email" required placeholder="hoangdev@gmail.com" class="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-800 placeholder:text-slate-400">
                        </div>
                    </div>

                    <div class="space-y-1">
                        <div class="flex items-center justify-between">
                            <label class="text-sm font-bold text-slate-700">Mật khẩu</label>
                            <button type="button" onclick="toggleView('forgot')" class="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none">Quên mật khẩu?</button>
                        </div>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i data-lucide="lock" class="w-5 h-5 text-slate-400"></i>
                            </div>
                            <input type="password" required placeholder="••••••••" class="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-800 placeholder:text-slate-400">
                        </div>
                    </div>

                    <button type="submit" id="submitBtn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                        <i data-lucide="loader-2" id="spinner" class="w-5 h-5 animate-spin hidden"></i>
                        <span id="btnText">Đăng nhập ngay</span>
                    </button>
                </form>

                <!-- Divider -->
                <div class="flex items-center gap-4 py-2">
                    <div class="flex-1 h-px bg-slate-200"></div>
                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Hoặc tiếp tục với</span>
                    <div class="flex-1 h-px bg-slate-200"></div>
                </div>

                <!-- Social Login -->
                <div class="grid grid-cols-2 gap-4">
                    <button id="googleBtn" onclick="simulateOAuth('Google', 'googleBtn')" class="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-3 rounded-xl transition-colors shadow-sm disabled:opacity-70">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span id="googleBtnText">Google</span>
                    </button>
                    <button id="githubBtn" onclick="simulateOAuth('GitHub', 'githubBtn')" class="flex items-center justify-center gap-2 bg-[#24292e] hover:bg-[#1b1f23] text-white font-bold py-3 rounded-xl transition-colors shadow-sm disabled:opacity-70">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span id="githubBtnText">GitHub</span>
                    </button>
                </div>

                <!-- Signup link -->
                <p class="text-center text-sm font-medium text-slate-600 mt-8">
                    Bạn chưa có tài khoản? <a href="#" class="font-bold text-blue-600 hover:text-blue-700 transition-colors">Đăng ký miễn phí</a>
                </p>
            </div>

            <!-- VIEW 2: QUÊN MẬT KHẨU -->
            <div id="forgotView" class="w-full max-w-md space-y-8 mt-12 lg:mt-0 hidden animate-fade-in">
                <div class="text-center lg:text-left">
                    <h2 class="text-3xl font-black text-slate-900 mb-2 tracking-tight">Quên Mật Khẩu? 🔒</h2>
                    <p class="text-slate-500 font-medium">Nhập email của bạn để hệ thống gửi mã OTP xác nhận khôi phục lại tài khoản.</p>
                </div>

                <form id="forgotForm" class="space-y-5" onsubmit="handleForgot(event)">
                    <div class="space-y-1">
                        <label class="text-sm font-bold text-slate-700">Email đã đăng ký</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i data-lucide="mail" class="w-5 h-5 text-slate-400"></i>
                            </div>
                            <input type="email" required placeholder="hoangdev@gmail.com" class="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all font-medium text-slate-800 placeholder:text-slate-400">
                        </div>
                    </div>

                    <button type="submit" id="otpBtn" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                        <i data-lucide="loader-2" id="otpSpinner" class="w-5 h-5 animate-spin hidden"></i>
                        <span id="otpBtnText">Nhận mã OTP bảo mật</span>
                    </button>
                </form>

                <p class="text-center text-sm font-medium text-slate-600 mt-8">
                    Bạn đã nhớ ra mật khẩu? <button onclick="toggleView('login')" class="font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none">Quay lại đăng nhập</button>
                </p>
            </div>
            
        </div>
    </div>

    <!-- Logic Script -->
    <script>
        lucide.createIcons();

        // Tính năng chuyển đổi giữa 2 form Đăng nhập & Quên MK
        function toggleView(viewType) {
            const loginView = document.getElementById('loginView');
            const forgotView = document.getElementById('forgotView');
            
            if (viewType === 'forgot') {
                loginView.classList.add('hidden');
                forgotView.classList.remove('hidden');
            } else {
                forgotView.classList.add('hidden');
                loginView.classList.remove('hidden');
            }
        }

        // Xử lý gửi OTP Quên mật khẩu
        function handleForgot(e) {
            e.preventDefault();
            const btn = document.getElementById('otpBtn');
            const spinner = document.getElementById('otpSpinner');
            const text = document.getElementById('otpBtnText');

            btn.disabled = true;
            spinner.classList.remove('hidden');
            text.textContent = 'Đang gửi mã...';

            setTimeout(() => {
                btn.classList.remove('bg-slate-900', 'hover:bg-slate-800');
                btn.classList.add('bg-emerald-500', 'hover:bg-emerald-600');
                spinner.classList.add('hidden');
                text.innerHTML = 'Đã gửi mã thành công! <i data-lucide="check-circle-2" class="w-5 h-5 inline"></i>';
                lucide.createIcons();
                
                setTimeout(() => {
                    alert("Kiểm tra email của bạn để lấy mã OTP nhé!");
                    toggleView('login'); // Tự động quay lại màn login sau 2 giây
                    
                    // Reset trạng thái nút
                    btn.disabled = false;
                    btn.classList.add('bg-slate-900', 'hover:bg-slate-800');
                    btn.classList.remove('bg-emerald-500', 'hover:bg-emerald-600');
                    text.textContent = 'Nhận mã OTP bảo mật';
                }, 2000);
            }, 1500);
        }

        // Xử lý đăng nhập thông thường
        function handleLogin(e) {
            e.preventDefault(); 
            
            const btn = document.getElementById('submitBtn');
            const spinner = document.getElementById('spinner');
            const btnText = document.getElementById('btnText');
            
            btn.disabled = true;
            spinner.classList.remove('hidden');
            btnText.textContent = 'Đang xác thực...';
            
            setTimeout(() => {
                btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
                btn.classList.add('bg-emerald-500', 'hover:bg-emerald-600');
                spinner.classList.add('hidden');
                btnText.innerHTML = 'Đăng nhập thành công! <i data-lucide="check" class="w-5 h-5 inline"></i>';
                lucide.createIcons(); 
                
                // Redirect sang App chính
                setTimeout(() => {
                    window.location.href = "index.html"; // Điều hướng thực tế tới App
                }, 800);
                
            }, 1500);
        }

        // Xử lý đăng nhập bằng Mạng xã hội (Google / Github)
        function simulateOAuth(provider, btnId) {
            const btn = document.getElementById(btnId);
            const textElement = document.getElementById(btnId + 'Text');
            const originalText = textElement.textContent;
            
            // UI Loading state
            btn.disabled = true;
            textElement.textContent = 'Đang chuyển hướng...';

            // Giả lập luồng Redirect -> Authorize -> Return
            setTimeout(() => {
                textElement.textContent = 'Đang cấp quyền...';
                
                setTimeout(() => {
                    textElement.textContent = 'Đăng nhập thành công!';
                    btn.classList.add('bg-emerald-500', 'text-white', 'border-emerald-500');
                    
                    // Chuyển về hệ thống chính
                    setTimeout(() => {
                        window.location.href = "index.html"; 
                    }, 500);
                }, 1200);
            }, 1000);
        }
    </script>
</body>
</html>