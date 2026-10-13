/**
 * Multi-language Support (Bahasa Indonesia & English)
 * Portfolio & CV - Andhika Widy Nugroho
 */

const portfolioTranslations = {
  id: {
    // Document metadata
    page_title: "Portfolio || Andhika Widy Nugroho",
    author_subtitle: "Social Media Specialist <br> Sidoarjo, Jawa Timur",

    // Navigation Menu
    nav_about: "Tentang Saya",
    nav_experience: "Pengalaman",
    nav_portfolio: "Portofolio",
    nav_contact: "Kontak",
    nav_download_cv: '<i class="fa fa-download" style="margin-right: 6px;"></i>Unduh CV',
    nav_print_cv: '<i class="fa fa-print" style="margin-right: 6px;"></i>Cetak CV',

    // Section 1: About Me
    heading_about: "Tentang Saya",
    hero_hook: `Halo, saya <strong>Andhika Widy Nugroho</strong>, lulusan S1 Ilmu Komunikasi dari UPN "Veteran" Jawa Timur dengan IPK 3.59, memiliki minat dan ketertarikan tinggi di bidang public relations, content creation, serta digital marketing. Berpengalaman dalam manajemen organisasi dan event, pernah berperan sebagai Operator Photobooth, koordinator logistik, serta pemateri publik, sekaligus berpengalaman sebagai Social Media Specialist untuk kafe The Vinyl Chick dan Kopi Kota. Selain itu, saya telah menyelesaikan magang di tim Digital Marketing PT. Indo Lautan Makmur. Melalui keaktifan di berbagai organisasi dan kegiatan, saya mengembangkan beragam soft skill dan hard skill yang sangat mendukung kemampuan saya dalam menjalankan tanggung jawab profesional.`,
    btn_download_cv: '<i class="fa fa-download"></i> Unduh CV',
    btn_print_cv: '<i class="fa fa-print"></i> Cetak CV',
    btn_view_portfolio: '<i class="fa fa-briefcase"></i> Lihat Portofolio',
    btn_contact_me: '<i class="fa fa-paper-plane"></i> Hubungi Saya',

    // Skills & Expertise
    heading_skills: "Keahlian & Keterampilan",
    heading_hard_skills: '<i class="fa fa-cogs"></i> Hard Skills',
    skill_smm: '<i class="fa fa-hashtag"></i> Manajemen Media Sosial',
    skill_content_planning: '<i class="fa fa-calendar-check-o"></i> Perencanaan Konten',
    skill_copywriting: '<i class="fa fa-pencil"></i> Copywriting',
    skill_content_creation: '<i class="fa fa-video-camera"></i> Pembuatan Konten',
    skill_capcut_canva: '<i class="fa fa-paint-brush"></i> CapCut & Canva',
    skill_ms_office: '<i class="fa fa-file-text-o"></i> Microsoft Office',
    skill_risk_mgmt: '<i class="fa fa-shield"></i> Manajemen Risiko',

    heading_soft_skills: '<i class="fa fa-users"></i> Soft Skills',
    skill_teamwork: '<i class="fa fa-handshake-o"></i> Kerja Sama Tim & Kolaborasi',
    skill_time_mgmt: '<i class="fa fa-clock-o"></i> Manajemen Waktu',
    skill_comm: '<i class="fa fa-comments-o"></i> Komunikasi Strategis',
    skill_problem_solving: '<i class="fa fa-lightbulb-o"></i> Pemecahan Masalah',
    skill_creative_thinking: '<i class="fa fa-star"></i> Berpikir Kreatif & Inovatif',

    // Education Section
    heading_education: "Pendidikan",
    edu_upn_title: 'UPN "VETERAN" JAWA TIMUR',
    edu_upn_degree: 'Sarjana Ilmu Komunikasi <span class="badge badge-success" style="background:#28a745; margin-left:6px;">IPK: 3.59 / 4.00</span>',
    edu_upn_desc: "Fokus pada komunikasi strategis, perencanaan kampanye media digital, riset audiens, serta produksi konten visual/audio-visual untuk meningkatkan brand awareness.",
    edu_sma_title: "SMA NEGERI 15 SURABAYA",
    edu_sma_major: "Jurusan: MIPA (Ilmu Pengetahuan Alam)",

    // Section 2: Experience
    heading_experience: "Pengalaman Kerja & Organisasi",
    exp_ilm_role: "DIGITAL MARKETING (MAGANG)",
    exp_ilm_company: "PT. Indo Lautan Makmur",
    exp_ilm_period: '<i class="fa fa-calendar"></i> Februari 2025 – Juni 2025',
    exp_ilm_b1: "Menyusun dan mengeksekusi perencanaan konten (content planning) perusahaan secara komprehensif di berbagai platform digital.",
    exp_ilm_b2: "Mengelola produksi konten media sosial (Instagram) secara rutin untuk meningkatkan brand awareness dan interaksi audiens.",
    exp_ilm_b3: "Merancang dan mendesain poster promosi untuk produk komersial yang dipasarkan oleh perusahaan.",
    exp_ilm_b4: "Berperan aktif dalam proses produksi video company profile sebagai talent di depan kamera serta kru pencahayaan.",

    exp_vinyl_role: "SOCIAL MEDIA SPECIALIST",
    exp_vinyl_company: "The Vinyl Chick",
    exp_vinyl_period: '<i class="fa fa-calendar"></i> September 2024 – November 2024',
    exp_vinyl_b1: "Merancang perencanaan konten strategis (content planning) kafe agar selaras dengan target audiens.",
    exp_vinyl_b2: "Memproduksi konten media sosial secara berkala guna mendongkrak visibilitas dan brand awareness kafe.",
    exp_vinyl_b3: "Berperan aktif sebagai talent kreatif dalam berbagai media promosi kafe.",

    exp_novo_role: "VOLUNTEER (RELAWAN)",
    exp_novo_company: "Generasi Bebas Plastik by Novo Group",
    exp_novo_period: '<i class="fa fa-calendar"></i> Januari 2024 – Agustus 2024',
    exp_novo_b1: "Membuat konten edukasi publik guna meningkatkan kesadaran masyarakat dalam mengurangi penggunaan sampah plastik sehari-hari.",
    exp_novo_b2: "Berkolaborasi dalam proyek akhir bersama bank sampah setempat untuk memproduksi konten edukasi mengenai proses pengelolaan sampah plastik.",

    exp_kpu_role: "VOLUNTEER PHOTOBOOTH CREW",
    exp_kpu_company: "KPU Jatim (Rekapitulasi Pemilu 2024)",
    exp_kpu_period: '<i class="fa fa-calendar"></i> Maret 2024',
    exp_kpu_b1: "Mengoperasikan fasilitas 360° photobooth yang disediakan oleh KPU Jatim.",
    exp_kpu_b2: "Mengajak dan mengarahkan tamu undangan untuk berpartisipasi mencoba pengalaman photobooth 360° secara interaktif.",

    // Section 3: Portfolio
    heading_portfolio: "Portofolio",
    portfolio_subtitle: "Kumpulan proyek pilihan meliputi kampanye kreatif, digital marketing, manajemen event, produksi media, dan penghargaan.",
    filter_all: "Semua",
    filter_marketing: "Pemasaran & Magang",
    filter_social: "Media Sosial",
    filter_events: "Event & Pemateri",
    filter_creative: "Proyek Perkuliahan",
    filter_achievement: "Penghargaan",

    // Portfolio Items
    port_1_title: "Magang Digital Marketing",
    port_1_subtitle: "PT. Indo Lautan Makmur (ILM Premium)",
    port_1_desc: "Menyusun perencanaan konten digital komprehensif, mengarahkan produksi Instagram Reels, serta merancang poster promosi kampanye produk musiman (edisi Valentine & Ramadhan).",

    port_2_title: "Social Media Specialist",
    port_2_subtitle: "Kopi Kota & The Vinyl Chick",
    port_2_desc: "Merancang kalender konten media sosial, mengelola materi visual kreatif, mempublikasikan kuis & permainan interaktif bagi audiens, dan bertindak sebagai talent guna mengangkat citra kafe.",

    port_3_title: "Sosialisasi & Seminar Public Speaking",
    port_3_subtitle: "SMA Negeri 1 Mojosari & UPN Veteran Jatim",
    port_3_desc: "Diundang sebagai pemateri tamu untuk sesi public speaking interaktif, membagikan wawasan praktis seputar kejelasan berbicara dan membangun rasa percaya diri sekaligus memperkenalkan UPN Veteran Jatim.",

    port_4_title: "KPU: Rekapitulasi Pemilu 2024",
    port_4_subtitle: "Komisi Pemilihan Umum Provinsi Jawa Timur",
    port_4_desc: "Mengoperasikan sistem 360° photobooth interaktif, mengatur instalasi teknis dokumentasi acara, serta memandu para tamu sepanjang proses Rapat Pleno Rekapitulasi Pemilu 2024.",

    port_5_title: "Sticky Punch: Pemutaran Film & Event",
    port_5_subtitle: "Event & Talkshow Kreatif Kesehatan Mental",
    port_5_desc: "Menyelenggarakan acara pelepasan stres bertema kesehatan mental di kafe Pat Dua yang menghadirkan penayangan film pendek, talkshow bersama narasumber, serta pertunjukan DJ dengan aktivitas interaktif.",

    port_6_title: "Majalah Commers Page",
    port_6_subtitle: "Karya Akhir Jurnalistik Media Massa",
    port_6_desc: "Proyek akhir majalah cetak kolaboratif. Menangani konseptualisasi majalah, liputan jurnalistik, penulisan artikel feature Cyber PR (\"Behind The Screen\"), dan tata letak periklanan.",

    port_7_title: "Juara 2 Podcast Jurnalistik",
    port_7_subtitle: "Festival Komunikasi 2025",
    port_7_desc: "Meraih Juara 2 Kategori Podcast Jurnalistik lewat karya \"Suara Bawah Tanah\" (Spotify Podcast), berfokus pada kekuatan narasi bercerita, peliputan audio investigasi, dan jangkauan audiens.",

    // Section 4: Contact
    heading_contact: "Kontak",
    contact_intro: 'Tertarik untuk berkolaborasi, mencari <strong>Social Media Specialist</strong>, atau ingin berdiskusi mengenai proyek kreatif? Silakan hubungi saya melalui kontak di bawah ini:',
    contact_loc_title: "Lokasi",
    contact_loc_val: "Sidoarjo, Jawa Timur<br>Indonesia",
    contact_phone_title: "Telepon / WhatsApp",
    contact_phone_btn: '<i class="fa fa-whatsapp"></i> Chat WhatsApp',
    contact_email_title: "Email",
    contact_email_btn: '<i class="fa fa-paper-plane"></i> Kirim Email',
    btn_download_cv_pdf: '<i class="fa fa-download"></i> Unduh CV (PDF)',
    btn_view_print_cv: '<i class="fa fa-print"></i> Lihat & Cetak CV',

    // CV Page (cv.html) Strings
    cv_download_pdf: "Unduh PDF",
    cv_print_btn: "Cetak CV",
    cv_back_home: "Kembali ke Portofolio",
    cv_about_title: "Tentang Saya",
    cv_about_text: 'Lulusan S1 Ilmu Komunikasi dari UPN "Veteran" Jawa Timur dengan IPK 3.59, memiliki ketertarikan tinggi dan pengalaman langsung di bidang Social Media Management dan Digital Marketing. Terampil dalam merancang strategi konten, memproduksi konten visual dan video, serta meningkatkan brand awareness melalui kampanye media sosial yang tepat sasaran. Kreatif, inovatif, dan siap memberikan kontribusi nyata bagi perusahaan.',
    cv_contact_title: "Kontak",
    cv_address: "Sidoarjo, Jawa Timur, Indonesia",
    cv_skills_title: "Keahlian",
    cv_hard_skills_group: "Hard Skills:",
    cv_soft_skills_group: "Soft Skills:",
    cv_soft_1: "Kerja Sama Tim & Kolaborasi",
    cv_soft_2: "Manajemen Waktu",
    cv_soft_3: "Komunikasi Strategis",
    cv_soft_4: "Pemecahan Masalah",
    cv_soft_5: "Berpikir Kreatif & Inovatif",

    cv_edu_title: "Pendidikan",
    cv_edu_upn_sub: "Sarjana Ilmu Komunikasi",
    cv_edu_upn_gpa: "IPK: 3.59 / 4.00",
    cv_edu_sma_sub: "Sekolah Menengah Atas (MIPA)",

    cv_exp_title: "Pengalaman Kerja",
    cv_exp_1_period: "(Februari 2025 – Juni 2025)",
    cv_exp_1_role: "DIGITAL MARKETING (MAGANG)",
    cv_exp_1_b1: "Menyusun dan mengeksekusi perencanaan konten (content planning) perusahaan secara komprehensif di platform digital.",
    cv_exp_1_b2: "Mengelola pembuatan konten media sosial (Instagram) secara rutin untuk meningkatkan brand awareness dan engagement.",
    cv_exp_1_b3: "Merancang poster promosi untuk produk komersial yang dipasarkan oleh perusahaan.",
    cv_exp_1_b4: "Berpartisipasi aktif dalam produksi video company profile sebagai talent dan kru pencahayaan.",

    cv_exp_2_period: "(September 2024 – November 2024)",
    cv_exp_2_role: "SOCIAL MEDIA SPECIALIST",
    cv_exp_2_b1: "Merancang perencanaan konten (content planning) kafe agar selaras dengan target audiens.",
    cv_exp_2_b2: "Memproduksi konten media sosial kreatif secara rutin untuk mendongkrak visibilitas dan brand awareness kafe.",
    cv_exp_2_b3: "Berperan aktif sebagai talent kreatif dalam berbagai media promosi kafe.",

    cv_exp_3_period: "(Januari 2024 – Agustus 2024)",
    cv_exp_3_role: "VOLUNTEER (RELAWAN)",
    cv_exp_3_b1: "Membuat konten edukasi publik guna meningkatkan kesadaran masyarakat dalam mengurangi penggunaan sampah plastik harian.",
    cv_exp_3_b2: "Berkolaborasi dalam proyek akhir bersama bank sampah setempat untuk memproduksi media edukasi terkait daur ulang sampah plastik.",

    cv_exp_4_period: "(Maret 2024)",
    cv_exp_4_role: "VOLUNTEER PHOTOBOOTH CREW",
    cv_exp_4_comp: "KPU Jatim (Rekapitulasi Pemilu 2024)",
    cv_exp_4_b1: "Mengoperasikan fasilitas 360° photobooth yang disediakan oleh KPU Jatim.",
    cv_exp_4_b2: "Mengajak dan mengarahkan tamu undangan acara untuk mencoba pengalaman photobooth 360° secara interaktif."
  },

  en: {
    // Document metadata
    page_title: "Portfolio || Andhika Widy Nugroho",
    author_subtitle: "Social Media Specialist <br> Sidoarjo, East Java",

    // Navigation Menu
    nav_about: "About Me",
    nav_experience: "Experience",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    nav_download_cv: '<i class="fa fa-download" style="margin-right: 6px;"></i>Download CV',
    nav_print_cv: '<i class="fa fa-print" style="margin-right: 6px;"></i>Print CV',

    // Section 1: About Me
    heading_about: "About Me",
    hero_hook: `Hi, I'm <strong>Andhika Widy Nugroho</strong>, a Communication Science graduate from UPN Veteran East Java with a GPA of 3.59, possessing a strong interest in public relations, content creation, and marketing. I have experience in organizational and event management, serving in roles such as Photobooth Operator, logistics coordinator, and speaker, as well as working as a social media specialist for The Vinyl Chick Cafe and Kopi Kota. Additionally, I completed an internship with the Digital Marketing team at PT. Indo Lautan Makmur. Through my participation in various organizational activities, I have developed a range of soft and hard skills that have significantly contributed to my ability to fulfill my professional responsibilities.`,
    btn_download_cv: '<i class="fa fa-download"></i> Download CV',
    btn_print_cv: '<i class="fa fa-print"></i> Print CV',
    btn_view_portfolio: '<i class="fa fa-briefcase"></i> View Portfolio',
    btn_contact_me: '<i class="fa fa-paper-plane"></i> Contact Me',

    // Skills & Expertise
    heading_skills: "Skills & Expertise",
    heading_hard_skills: '<i class="fa fa-cogs"></i> Hard Skills',
    skill_smm: '<i class="fa fa-hashtag"></i> Social Media Management',
    skill_content_planning: '<i class="fa fa-calendar-check-o"></i> Content Planning',
    skill_copywriting: '<i class="fa fa-pencil"></i> Copywriting',
    skill_content_creation: '<i class="fa fa-video-camera"></i> Content Creation',
    skill_capcut_canva: '<i class="fa fa-paint-brush"></i> CapCut & Canva',
    skill_ms_office: '<i class="fa fa-file-text-o"></i> Microsoft Office',
    skill_risk_mgmt: '<i class="fa fa-shield"></i> Risk Management',

    heading_soft_skills: '<i class="fa fa-users"></i> Soft Skills',
    skill_teamwork: '<i class="fa fa-handshake-o"></i> Teamwork & Collaboration',
    skill_time_mgmt: '<i class="fa fa-clock-o"></i> Time Management',
    skill_comm: '<i class="fa fa-comments-o"></i> Strategic Communication',
    skill_problem_solving: '<i class="fa fa-lightbulb-o"></i> Problem Solving',
    skill_creative_thinking: '<i class="fa fa-star"></i> Creative & Innovative Thinking',

    // Education Section
    heading_education: "Education",
    edu_upn_title: 'UPN "VETERAN" JAWA TIMUR',
    edu_upn_degree: 'Bachelor of Communication Science <span class="badge badge-success" style="background:#28a745; margin-left:6px;">GPA: 3.59 / 4.00</span>',
    edu_upn_desc: "Focused on strategic communication, digital media campaign planning, audience research, and visual/audio-visual content production to enhance brand awareness.",
    edu_sma_title: "SMA NEGERI 15 SURABAYA",
    edu_sma_major: "Major: Natural Sciences (IPA)",

    // Section 2: Experience
    heading_experience: "Work Experience & Organizations",
    exp_ilm_role: "DIGITAL MARKETING (INTERN)",
    exp_ilm_company: "PT. Indo Lautan Makmur",
    exp_ilm_period: '<i class="fa fa-calendar"></i> February 2025 – June 2025',
    exp_ilm_b1: "Formulated and executed comprehensive corporate content planning across digital platforms.",
    exp_ilm_b2: "Managed routine social media content creation (Instagram) to elevate brand awareness and engagement.",
    exp_ilm_b3: "Designed promotional posters for commercial products marketed by the company.",
    exp_ilm_b4: "Actively contributed to company profile video production as on-camera talent and lighting crew.",

    exp_vinyl_role: "SOCIAL MEDIA SPECIALIST",
    exp_vinyl_company: "The Vinyl Chick",
    exp_vinyl_period: '<i class="fa fa-calendar"></i> September 2024 – November 2024',
    exp_vinyl_b1: "Developed strategic content plans tailored to resonate with the target audience.",
    exp_vinyl_b2: "Routinely produced creative social media content to boost cafe visibility and brand presence.",
    exp_vinyl_b3: "Actively performed as creative talent across various cafe promotional media.",

    exp_novo_role: "VOLUNTEER",
    exp_novo_company: "Generasi Bebas Plastik by Novo Group",
    exp_novo_period: '<i class="fa fa-calendar"></i> January 2024 – August 2024',
    exp_novo_b1: "Produced public educational content to raise awareness about reducing daily plastic waste.",
    exp_novo_b2: "Collaborated on a community final project with local waste banks to create educational media regarding plastic waste recycling.",

    exp_kpu_role: "VOLUNTEER PHOTOBOOTH CREW",
    exp_kpu_company: "KPU Jatim (2024 Election Recapitulation)",
    exp_kpu_period: '<i class="fa fa-calendar"></i> March 2024',
    exp_kpu_b1: "Operated interactive 360° photobooth equipment provided by KPU Jatim.",
    exp_kpu_b2: "Welcomed and guided event guests to participate interactively in the 360° photobooth experience.",

    // Section 3: Portfolio
    heading_portfolio: "Portfolio",
    portfolio_subtitle: "A showcase of selected creative campaigns, digital marketing, event management, media production, and achievements.",
    filter_all: "All",
    filter_marketing: "Marketing & Internship",
    filter_social: "Social Media",
    filter_events: "Events & Speaking",
    filter_creative: "College Projects",
    filter_achievement: "Achievements",

    // Portfolio Items
    port_1_title: "Digital Marketing Internship",
    port_1_subtitle: "PT. Indo Lautan Makmur (ILM Premium)",
    port_1_desc: "Formulated comprehensive digital content planning, directed Instagram Reels production, and crafted promotional posters for seasonal product campaigns (Valentine & Ramadan editions).",

    port_2_title: "Social Media Specialist",
    port_2_subtitle: "Kopi Kota & The Vinyl Chick",
    port_2_desc: "Designed tailored social media calendars, managed creative visual assets, published interactive audience quizzes & games, and acted as talent to elevate cafe brand presence.",

    port_3_title: "Public Speaking Seminar Socialization",
    port_3_subtitle: "SMA Negeri 1 Mojosari & UPN Veteran Jatim",
    port_3_desc: "Invited as a guest speaker to conduct interactive public speaking sessions, sharing actionable insights on communication clarity and confidence building while promoting UPN Veteran Jatim.",

    port_4_title: "KPU: Rekapitulasi Pemilu 2024",
    port_4_subtitle: "Komisi Pemilihan Umum Provinsi Jawa Timur",
    port_4_desc: "Operated 360° interactive photobooth systems, arranged event documentation technical setups, and guided guests throughout the 2024 General Election Recapitulation Plenary.",

    port_5_title: "Sticky Punch: Screening & Event",
    port_5_subtitle: "Creative Mental Health Event & Talkshow",
    port_5_desc: "Organized a unique mental health stress-release event at Pat Dua cafe featuring short film screenings, artist talkshows, and DJ performances with engaging interactive activities.",

    port_6_title: "Commers Page Magazine",
    port_6_subtitle: "Mass Media Journalism Capstone",
    port_6_desc: "Collaborative printed magazine final project. Handled magazine conceptualization, journalistic reporting, Cyber PR feature writing (\"Behind The Screen\"), and advertising layout.",

    port_7_title: "2nd Best Podcast Journalism Award",
    port_7_subtitle: "Communication Festival 2025",
    port_7_desc: "Recognized as 2nd Best in Podcast Journalism for producing \"Suara Bawah Tanah\" (Spotify Podcast), focusing on impactful storytelling, investigative audio reporting, and audience reach.",

    // Section 4: Contact
    heading_contact: "Contact",
    contact_intro: 'Interested in collaborating, looking for a <strong>Social Media Specialist</strong>, or wishing to discuss creative projects? Feel free to reach out via the contact options below:',
    contact_loc_title: "Location",
    contact_loc_val: "Sidoarjo, East Java<br>Indonesia",
    contact_phone_title: "Phone / WhatsApp",
    contact_phone_btn: '<i class="fa fa-whatsapp"></i> Chat on WhatsApp',
    contact_email_title: "Email",
    contact_email_btn: '<i class="fa fa-paper-plane"></i> Send Email',
    btn_download_cv_pdf: '<i class="fa fa-download"></i> Download CV (PDF)',
    btn_view_print_cv: '<i class="fa fa-print"></i> View & Print CV',

    // CV Page (cv.html) Strings
    cv_download_pdf: "Download PDF",
    cv_print_btn: "Print CV",
    cv_back_home: "Back to Portfolio",
    cv_about_title: "About Me",
    cv_about_text: 'Bachelor of Communication Science graduate from UPN "Veteran" Jawa Timur with a 3.59 GPA, possessing a strong passion and hands-on experience in Social Media Management and Digital Marketing. Adept at designing content strategies, producing visual and video content, and driving brand awareness through targeted social media campaigns. Creative, innovative, and eager to deliver impactful contributions to the company.',
    cv_contact_title: "Contact",
    cv_address: "Sidoarjo, East Java, Indonesia",
    cv_skills_title: "Skills",
    cv_hard_skills_group: "Hard Skills:",
    cv_soft_skills_group: "Soft Skills:",
    cv_soft_1: "Teamwork & Collaboration",
    cv_soft_2: "Time Management",
    cv_soft_3: "Strategic Communication",
    cv_soft_4: "Problem Solving",
    cv_soft_5: "Creative & Innovative Thinking",

    cv_edu_title: "Education",
    cv_edu_upn_sub: "Bachelor of Communication Science",
    cv_edu_upn_gpa: "GPA: 3.59 / 4.00",
    cv_edu_sma_sub: "High School Diploma",

    cv_exp_title: "Experience",
    cv_exp_1_period: "(February 2025 – June 2025)",
    cv_exp_1_role: "DIGITAL MARKETING (INTERN)",
    cv_exp_1_b1: "Formulated and executed comprehensive corporate content planning across digital platforms.",
    cv_exp_1_b2: "Managed routine social media content creation (Instagram) to elevate brand awareness and engagement.",
    cv_exp_1_b3: "Designed promotional posters for commercial products marketed by the company.",
    cv_exp_1_b4: "Actively contributed to company profile video production as on-camera talent and lighting crew.",

    cv_exp_2_period: "(September 2024 – November 2024)",
    cv_exp_2_role: "SOCIAL MEDIA SPECIALIST",
    cv_exp_2_b1: "Developed strategic content plans tailored to resonate with the target audience.",
    cv_exp_2_b2: "Routinely produced creative social media content to boost cafe visibility and brand presence.",
    cv_exp_2_b3: "Actively performed as creative talent across various cafe promotional media.",

    cv_exp_3_period: "(January 2024 – August 2024)",
    cv_exp_3_role: "VOLUNTEER",
    cv_exp_3_b1: "Produced public educational content to raise awareness about reducing daily plastic waste.",
    cv_exp_3_b2: "Collaborated on a community final project with local waste banks to create educational media regarding plastic waste recycling.",

    cv_exp_4_period: "(March 2024)",
    cv_exp_4_role: "VOLUNTEER PHOTOBOOTH CREW",
    cv_exp_4_comp: "KPU Jatim (2024 Election Recapitulation)",
    cv_exp_4_b1: "Operated interactive 360° photobooth equipment provided by KPU Jatim.",
    cv_exp_4_b2: "Welcomed and guided event guests to participate interactively in the 360° photobooth experience."
  }
};

/**
 * Applies the selected language across all elements with [data-i18n]
 * @param {string} lang - 'id' or 'en'
 */
function setAppLanguage(lang) {
  if (lang !== 'id' && lang !== 'en') {
    lang = 'id';
  }

  // Save preference
  try {
    localStorage.setItem('portfolio_language', lang);
  } catch (e) {
    console.warn('localStorage access denied:', e);
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  const strings = portfolioTranslations[lang] || portfolioTranslations.id;

  // Update all [data-i18n] elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (strings[key] !== undefined) {
      el.innerHTML = strings[key];
    }
  });

  // Update CV links on index page to include ?lang= query param
  const cvLinks = document.querySelectorAll('a[href^="cv.html"]');
  cvLinks.forEach((link) => {
    link.setAttribute('href', `cv.html?lang=${lang}`);
  });

  // Update Portfolio links on CV page to include ?lang= query param if applicable
  const portfolioLinks = document.querySelectorAll('a[href^="index.html"]');
  portfolioLinks.forEach((link) => {
    link.setAttribute('href', `index.html?lang=${lang}`);
  });

  // Update active state on switcher buttons
  const buttons = document.querySelectorAll('.lang-btn, .cv-lang-btn');
  buttons.forEach((btn) => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * Initializes language from URL param -> localStorage -> default 'id'
 */
function initLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langFromUrl = urlParams.get('lang');
  let currentLang = 'id';

  if (langFromUrl === 'en' || langFromUrl === 'id') {
    currentLang = langFromUrl;
  } else {
    try {
      const savedLang = localStorage.getItem('portfolio_language');
      if (savedLang === 'en' || savedLang === 'id') {
        currentLang = savedLang;
      }
    } catch (e) {
      console.warn('localStorage unavailable:', e);
    }
  }

  // Apply initial language
  setAppLanguage(currentLang);

  // Bind click handlers to language switch buttons
  document.addEventListener('click', function (e) {
    const target = e.target.closest('.lang-btn, .cv-lang-btn');
    if (target) {
      e.preventDefault();
      const selectedLang = target.getAttribute('data-lang');
      if (selectedLang) {
        setAppLanguage(selectedLang);
      }
    }
  });
}

// Auto-run on DOMContentLoaded or immediately if DOM is already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}
