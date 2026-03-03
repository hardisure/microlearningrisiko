// Topics 16-20: Modul 5 - Budaya dan Pemantauan Risiko
export const MODULES_4 = [
    {
        id: 16, title: 'Pemantauan, Tinjauan, dan Continuous Improvement', subtitle: 'Siklus PDCA Risiko',
        module: 'Modul 5: Budaya, Pemantauan, dan Keberlanjutan',
        description: 'Siklus Plan-Do-Check-Act dalam pemantauan risiko dan mekanisme eskalasi insiden.',
        videoUrl: '',
        article: `<h2>Siklus PDCA dalam Manajemen Risiko</h2><p>Pemantauan risiko bukan kegiatan sekali jalan — ia mengikuti siklus <strong>Plan-Do-Check-Act (PDCA)</strong> yang berkelanjutan.</p><h3>Plan</h3><p>Menetapkan rencana pemantauan: apa yang dipantau, seberapa sering, dan oleh siapa.</p><h3>Do</h3><p>Melaksanakan pemantauan sesuai rencana dan mengumpulkan data KRI.</p><h3>Check</h3><p>Mengevaluasi data pemantauan dan membandingkan dengan threshold yang ditetapkan.</p><h3>Act</h3><p>Mengambil tindakan korektif jika ditemukan deviasi dan melakukan eskalasi sesuai prosedur.</p><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>Manajemen risiko yang tidak dipantau dan ditinjau secara berkala akan menjadi dokumen mati yang tidak memberikan perlindungan nyata.</p></div>`,
        realityCheck: { case: 'Register risiko sebuah unit terakhir diperbarui 18 bulan lalu. Selama periode tersebut, terjadi perubahan signifikan pada kondisi operasional dan regulasi, namun tidak tercermin dalam profil risiko.', question: 'Bagaimana siklus PDCA bisa mencegah register risiko menjadi "dokumen mati"?' },
        quiz: [
            { id: 'q16-1', question: 'PDCA dalam manajemen risiko terdiri dari:', options: ['Price, Delivery, Cost, Accuracy', 'Plan, Do, Check, Act', 'Prevent, Detect, Control, Assess', 'Prepare, Deploy, Confirm, Adjust'], correct: 1 },
            { id: 'q16-2', question: 'Tahap "Check" dalam PDCA risiko berarti:', options: ['Membuat rencana baru', 'Mengevaluasi data pemantauan terhadap threshold', 'Melaksanakan pemantauan', 'Mengambil tindakan korektif'], correct: 1 },
            { id: 'q16-3', question: 'Register risiko harus diperbarui:', options: ['Hanya saat audit', 'Secara berkala dan saat terjadi perubahan signifikan', 'Setiap 5 tahun', 'Hanya di awal proyek'], correct: 1 },
            { id: 'q16-4', question: 'Eskalasi risiko diperlukan ketika:', options: ['Risiko sudah dimitigasi', 'Ditemukan deviasi dari threshold yang ditetapkan', 'Tidak ada perubahan', 'Audit selesai'], correct: 1 },
            { id: 'q16-5', question: 'Continuous improvement dalam manajemen risiko berarti:', options: ['Mengganti seluruh sistem setiap tahun', 'Memperbaiki proses secara berkelanjutan berdasarkan pembelajaran', 'Menambah jumlah risiko yang diidentifikasi', 'Meningkatkan biaya mitigasi'], correct: 1 }
        ],
        reflectionQuestion: 'Seberapa sering register risiko di unit Anda diperbarui? Apa yang bisa diperbaiki dalam proses pemantauan?',
    },
    {
        id: 17, title: 'Budaya Risiko dan Tone from the Top', subtitle: 'Membangun Risk-Aware Culture',
        module: 'Modul 5: Budaya, Pemantauan, dan Keberlanjutan',
        description: 'Peran kepemimpinan dalam membentuk budaya sadar risiko di seluruh level organisasi.',
        videoUrl: '',
        article: `<h2>Budaya Risiko dan Tone from the Top</h2><p>Budaya risiko yang kuat dimulai dari <strong>komitmen nyata pimpinan tertinggi</strong> (Tone from the Top). Tanpa dukungan pimpinan, sistem manajemen risiko paling canggih pun tidak akan efektif.</p><h3>Indikator Budaya Risiko yang Kuat</h3><ul><li>Karyawan berani melaporkan risiko tanpa takut disalahkan</li><li>Risiko didiskusikan secara terbuka dalam rapat-rapat rutin</li><li>Keputusan bisnis selalu mempertimbangkan aspek risiko</li><li>Terdapat penghargaan untuk identifikasi risiko yang baik</li></ul><h3>Tone from the Top</h3><p>Pimpinan harus <strong>mendemonstrasikan komitmennya</strong> melalui tindakan nyata, bukan hanya pernyataan. Ketika Direksi secara konsisten bertanya "apa risikonya?" dalam setiap keputusan, budaya risiko akan terbentuk secara alami.</p><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>Budaya risiko tidak bisa dibangun melalui memo atau SOP — ia terbentuk melalui perilaku konsisten dari pimpinan yang kemudian ditiru oleh seluruh organisasi.</p></div>`,
        realityCheck: { case: 'Seorang operator melaporkan kondisi abnormal pada sistem kontrol, namun supervisornya mengabaikan laporan tersebut dan menyuruhnya "tidak membuat masalah". Keesokan harinya, sistem gagal dan menyebabkan trip pembangkit.', question: 'Apa dampak perilaku supervisor ini terhadap budaya risiko di unit tersebut?' },
        quiz: [
            { id: 'q17-1', question: '"Tone from the Top" berarti:', options: ['Kebijakan yang ditulis oleh manajemen', 'Komitmen nyata pimpinan tertinggi terhadap manajemen risiko', 'Nada suara dalam presentasi', 'Target dari manajemen puncak'], correct: 1 },
            { id: 'q17-2', question: 'Indikator budaya risiko yang kuat TIDAK termasuk:', options: ['Karyawan berani melaporkan risiko', 'Risiko didiskusikan terbuka', 'Karyawan yang melaporkan risiko dianggap "pembuat masalah"', 'Keputusan mempertimbangkan risiko'], correct: 2 },
            { id: 'q17-3', question: 'Budaya risiko paling efektif dibangun melalui:', options: ['Memo dan surat edaran', 'Perilaku konsisten dari pimpinan', 'Pelatihan sekali setahun', 'Penambahan staf manajemen risiko'], correct: 1 },
            { id: 'q17-4', question: 'Blame culture berdampak pada manajemen risiko karena:', options: ['Meningkatkan akurasi laporan', 'Membuat karyawan takut melaporkan risiko', 'Mempercepat proses mitigasi', 'Mengurangi biaya pelatihan'], correct: 1 },
            { id: 'q17-5', question: 'Skenario: Direksi selalu memulai rapat dengan pertanyaan "apa risiko utama bulan ini?" Ini menunjukkan:', options: ['Kurangnya kepercayaan terhadap tim', 'Tone from the Top yang efektif', 'Birokratisasi berlebihan', 'Fokus hanya pada risiko'], correct: 1 }
        ],
        reflectionQuestion: 'Bagaimana pimpinan di unit Anda menunjukkan komitmen terhadap manajemen risiko? Apa yang bisa ditingkatkan?',
    },
    {
        id: 18, title: 'Manajemen Risiko dalam Rantai Pasok', subtitle: 'Supply Chain Risk',
        module: 'Modul 5: Budaya, Pemantauan, dan Keberlanjutan',
        description: 'Identifikasi dan pengelolaan risiko rantai pasok untuk keandalan operasi pembangkit.',
        videoUrl: '',
        article: `<h2>Risiko Rantai Pasok</h2><p>Keandalan operasi pembangkit sangat bergantung pada <strong>ketersediaan spare part, bahan bakar, dan jasa pendukung</strong> yang tepat waktu dan berkualitas.</p><h3>Kategori Risiko Rantai Pasok</h3><ul><li><strong>Risiko Supplier:</strong> Ketergantungan pada single supplier, kegagalan supplier</li><li><strong>Risiko Logistik:</strong> Keterlambatan pengiriman, kerusakan dalam transit</li><li><strong>Risiko Kualitas:</strong> Spare part tidak sesuai spesifikasi</li><li><strong>Risiko Harga:</strong> Fluktuasi harga komoditas dan valas</li></ul><h3>Strategi Mitigasi</h3><ul><li>Diversifikasi supplier untuk komponen kritis</li><li>Safety stock untuk spare part kritis</li><li>Kontrak jangka panjang dengan klausul perlindungan harga</li><li>Audit berkala terhadap kualitas supplier</li></ul><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>Rantai pasok yang tidak dikelola risikonya adalah mata rantai terlemah dalam keandalan operasi pembangkit.</p></div>`,
        realityCheck: { case: 'PT MKP bergantung pada satu supplier untuk bearing turbin kritis. Ketika supplier tersebut mengalami masalah produksi, lead time pengiriman meningkat dari 2 bulan menjadi 8 bulan, memaksa unit beroperasi dengan risiko kegagalan yang lebih tinggi.', question: 'Langkah mitigasi apa yang seharusnya sudah dilakukan untuk mencegah situasi ini?' },
        quiz: [
            { id: 'q18-1', question: 'Risiko ketergantungan pada single supplier disebut:', options: ['Risiko kualitas', 'Risiko konsentrasi supplier', 'Risiko logistik', 'Risiko harga'], correct: 1 },
            { id: 'q18-2', question: 'Safety stock bertujuan untuk:', options: ['Mengurangi biaya penyimpanan', 'Menjamin ketersediaan spare part kritis saat dibutuhkan', 'Meningkatkan hubungan dengan supplier', 'Memenuhi syarat audit'], correct: 1 },
            { id: 'q18-3', question: 'Diversifikasi supplier berarti:', options: ['Menggunakan supplier termurah', 'Memiliki lebih dari satu supplier untuk komponen penting', 'Mengganti supplier setiap tahun', 'Mengimpor semua spare part'], correct: 1 },
            { id: 'q18-4', question: 'Audit supplier berkala bertujuan untuk:', options: ['Menekan harga', 'Memastikan kualitas dan keandalan supplier', 'Memenuhi persyaratan ISO saja', 'Mengurangi jumlah supplier'], correct: 1 },
            { id: 'q18-5', question: 'Risiko harga komoditas dapat dimitigasi melalui:', options: ['Menunda pengadaan', 'Kontrak jangka panjang dengan klausul perlindungan harga', 'Mengurangi penggunaan spare part', 'Mengabaikan fluktuasi harga'], correct: 1 }
        ],
        reflectionQuestion: 'Apa risiko rantai pasok terbesar yang dihadapi unit Anda? Apakah sudah ada strategi mitigasi yang memadai?',
    },
    {
        id: 19, title: 'Manajemen Krisis dan Business Continuity', subtitle: 'Kesiapan Menghadapi Krisis',
        module: 'Modul 5: Budaya, Pemantauan, dan Keberlanjutan',
        description: 'Kesiapan organisasi menghadapi krisis dan memastikan kelangsungan bisnis.',
        videoUrl: '',
        article: `<h2>Manajemen Krisis dan BCP</h2><p>Krisis adalah peristiwa yang mengancam kelangsungan bisnis secara fundamental. <strong>Business Continuity Plan (BCP)</strong> memastikan organisasi dapat bertahan dan pulih.</p><h3>Elemen BCP</h3><ul><li><strong>Business Impact Analysis (BIA):</strong> Mengidentifikasi proses kritis dan dampak gangguan</li><li><strong>Recovery Time Objective (RTO):</strong> Batas waktu pemulihan yang dapat diterima</li><li><strong>Recovery Point Objective (RPO):</strong> Titik pemulihan data yang dapat diterima</li><li><strong>Tim Krisis:</strong> Struktur komando dan komunikasi krisis</li></ul><h3>Tahapan Manajemen Krisis</h3><ol><li>Deteksi dan eskalasi</li><li>Aktivasi tim krisis dan BCP</li><li>Respons dan stabilisasi</li><li>Pemulihan operasi</li><li>Evaluasi pasca-krisis dan pembelajaran</li></ol><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>Organisasi yang tidak memiliki BCP bukan sedang menghemat — mereka sedang berjudi dengan kelangsungan bisnis.</p></div>`,
        realityCheck: { case: 'Gempa bumi merusak jalur transmisi utama ke salah satu unit pembangkit PT MKP. Tanpa BCP yang teruji, tim membutuhkan 5 hari untuk memulihkan operasi. Dengan BCP, estimasi pemulihan bisa dicapai dalam 24 jam.', question: 'Elemen BCP apa yang paling kritis untuk skenario bencana alam seperti ini?' },
        quiz: [
            { id: 'q19-1', question: 'BCP singkatan dari:', options: ['Business Control Protocol', 'Business Continuity Plan', 'Basic Compliance Procedure', 'Board Corporate Policy'], correct: 1 },
            { id: 'q19-2', question: 'Business Impact Analysis (BIA) bertujuan untuk:', options: ['Menghitung profit', 'Mengidentifikasi proses kritis dan dampak gangguan', 'Membuat laporan keuangan', 'Menilai kinerja karyawan'], correct: 1 },
            { id: 'q19-3', question: 'Recovery Time Objective (RTO) adalah:', options: ['Waktu untuk membuat laporan', 'Batas waktu pemulihan yang dapat diterima', 'Target recovery rate investasi', 'Waktu respons customer service'], correct: 1 },
            { id: 'q19-4', question: 'Tahapan pertama manajemen krisis adalah:', options: ['Aktivasi tim krisis', 'Deteksi dan eskalasi', 'Pemulihan operasi', 'Evaluasi pasca-krisis'], correct: 1 },
            { id: 'q19-5', question: 'BCP harus diuji secara berkala karena:', options: ['Persyaratan audit', 'Memastikan efektivitas rencana saat krisis nyata terjadi', 'Menambah pekerjaan tim', 'Mengurangi anggaran'], correct: 1 }
        ],
        reflectionQuestion: 'Apakah unit Anda memiliki BCP yang teruji? Skenario krisis apa yang paling Anda khawatirkan?',
    },
    {
        id: 20, title: 'Integrasi ERM dalam Transformasi Digital', subtitle: 'Risiko dan Peluang Digital',
        module: 'Modul 5: Budaya, Pemantauan, dan Keberlanjutan',
        description: 'Mengelola risiko siber, transformasi digital, dan memanfaatkan teknologi untuk penguatan ERM.',
        videoUrl: '',
        article: `<h2>ERM dan Transformasi Digital</h2><p>Transformasi digital membawa <strong>peluang sekaligus risiko baru</strong> yang harus dikelola dalam kerangka ERM yang komprehensif.</p><h3>Risiko Digital</h3><ul><li><strong>Risiko Siber:</strong> Serangan malware, ransomware, data breach</li><li><strong>Risiko Sistem:</strong> Kegagalan sistem IT, downtime aplikasi kritis</li><li><strong>Risiko Data:</strong> Kebocoran data sensitif, integritas data</li><li><strong>Risiko Perubahan:</strong> Resistensi karyawan, skill gap</li></ul><h3>Peluang Digital untuk ERM</h3><ul><li>Dashboard risiko real-time dengan IoT dan sensor</li><li>Analitik prediktif untuk early warning</li><li>Otomasi pemantauan KRI</li><li>Platform kolaborasi untuk komunikasi risiko</li></ul><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>Transformasi digital bukan ancaman bagi manajemen risiko — ia adalah peluang untuk membuat ERM lebih efektif, real-time, dan data-driven.</p></div>`,
        realityCheck: { case: 'PT MKP mengimplementasikan sistem SCADA baru untuk monitoring pembangkit. Sebulan setelah go-live, sistem diretas dan hacker mampu mengakses kontrol operasional untuk sementara waktu sebelum terdeteksi.', question: 'Risiko digital apa yang seharusnya diidentifikasi dan dimitigasi sebelum implementasi SCADA baru?' },
        quiz: [
            { id: 'q20-1', question: 'Risiko siber utama yang dihadapi perusahaan energi meliputi:', options: ['Hanya virus komputer', 'Malware, ransomware, dan data breach', 'Hanya risiko email spam', 'Risiko media sosial'], correct: 1 },
            { id: 'q20-2', question: 'IoT dan sensor dalam ERM bermanfaat untuk:', options: ['Menggantikan peran manusia sepenuhnya', 'Dashboard risiko real-time dan early warning', 'Mengurangi biaya pelatihan', 'Menghilangkan semua risiko'], correct: 1 },
            { id: 'q20-3', question: 'Risiko perubahan dalam transformasi digital meliputi:', options: ['Hanya risiko teknis', 'Resistensi karyawan dan skill gap', 'Hanya risiko biaya', 'Risiko cuaca'], correct: 1 },
            { id: 'q20-4', question: 'Analitik prediktif dalam ERM bertujuan untuk:', options: ['Menggantikan penilaian manusia', 'Memberikan early warning berbasis data historis dan tren', 'Mengurangi jumlah KRI', 'Mengotomasi semua keputusan'], correct: 1 },
            { id: 'q20-5', question: 'Integrasi ERM dalam transformasi digital harus dilakukan:', options: ['Setelah transformasi selesai', 'Sejak tahap perencanaan transformasi', 'Hanya jika terjadi insiden', 'Oleh vendor IT saja'], correct: 1 }
        ],
        reflectionQuestion: 'Apa risiko digital terbesar yang dihadapi unit Anda saat ini? Bagaimana transformasi digital bisa memperkuat praktik manajemen risiko?',
    },
];
