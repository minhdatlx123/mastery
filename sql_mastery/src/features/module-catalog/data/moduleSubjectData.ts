import type { ModuleStatsItem, ModuleSubject } from '../types/moduleSelect';

export const moduleSubjects: ModuleSubject[] = [
  {
    id: 'digital-foundation',
    name: 'Kỹ năng số',
    description:
      'Lộ trình nhập môn đa ngành: tư duy công nghệ, lập trình căn bản, marketing nền tảng, ads cơ bản và kỹ năng làm việc hiện đại.',
    iconType: 'digital',
    totalModules: 17,
    quizCount: 50,
    practiceCount: 50,
    duration: '12-18 giờ',
    tags: ['Lập trình cơ bản', 'Marketing', 'Ads cơ bản', 'Kỹ năng nghề'],
    color: {
      from: '#3b82f6',
      to: '#6366f1',
      glow: 'rgba(99, 102, 241, 0.25)',
      badge: 'bg-blue-500/15',
      badgeText: 'text-blue-300',
    },
    available: true,
    route: '/learn?module=1',
  },
  {
    id: 'marketing-ads',
    name: 'Marketing & Ads',
    description:
      'Xây nền tảng marketing thực chiến: insight khách hàng, content, social media, chạy quảng cáo và đo lường hiệu quả chiến dịch.',
    iconType: 'marketing',
    totalModules: 20,
    quizCount: 60,
    practiceCount: 80,
    duration: '20-30 giờ',
    tags: ['Content', 'Social', 'Quảng cáo', 'Phân tích'],
    color: {
      from: '#06b6d4',
      to: '#0ea5e9',
      glow: 'rgba(6, 182, 212, 0.2)',
      badge: 'bg-cyan-500/15',
      badgeText: 'text-cyan-300',
    },
    available: false,
    route: '/learn?module=1',
  },
  {
    id: 'career-tools',
    name: 'Công cụ nghề nghiệp',
    description:
      'Rèn kỹ năng làm việc: quản lý công việc, tư duy giải quyết vấn đề, phối hợp nhóm và sử dụng công cụ số trong doanh nghiệp.',
    iconType: 'career',
    totalModules: 15,
    quizCount: 45,
    practiceCount: 60,
    duration: '15-22 giờ',
    tags: ['Productivity', 'Làm việc nhóm', 'Tư duy', 'Ứng dụng số'],
    color: {
      from: '#22c55e',
      to: '#16a34a',
      glow: 'rgba(34, 197, 94, 0.2)',
      badge: 'bg-green-500/15',
      badgeText: 'text-green-300',
    },
    available: false,
    route: '/learn?module=1',
  },
];

export const moduleStats: ModuleStatsItem[] = [
  { iconType: 'book', label: 'Lộ trình học', value: '17+', color: '#60a5fa' },
  { iconType: 'quiz', label: 'Bài Quiz', value: '50+', color: '#fbbf24' },
  { iconType: 'practice', label: 'Bài thực hành', value: '50+', color: '#34d399' },
  { iconType: 'ai', label: 'AI hỗ trợ', value: '24/7', color: '#c084fc' },
];
