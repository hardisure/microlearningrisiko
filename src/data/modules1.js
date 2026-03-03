// 20 Module Definitions for LMS Manajemen Risiko PT MKP
// Topics 1-5: Full content from reference documents
// Topics 6-20: Structured content from PDF curriculum

export const MODULES = [
    {
        id: 1,
        title: 'Pengantar Manajemen Risiko Terintegrasi',
        subtitle: 'Konsep, Urgensi, dan Penciptaan Nilai',
        module: 'Modul 1: Fondasi dan Tata Kelola Risiko',
        description: 'Memahami definisi Manajemen Risiko Terintegrasi dan tujuannya untuk melindungi dan menciptakan nilai bagi PT MKP, berdasarkan filosofi ISO 31000 dan COSO ERM.',
        videoUrl: '',
        article: `<h2>Apa itu Manajemen Risiko Terintegrasi?</h2>
<p>Manajemen Risiko Terintegrasi (Enterprise Risk Management/ERM) adalah pendekatan sistematis dan terstruktur untuk mengelola seluruh risiko yang dihadapi organisasi secara holistik. Di PT Mitra Karya Prima (MKP), ERM bukan sekadar pelengkap administratif, melainkan <strong>inti dari keberlanjutan bisnis</strong> dalam industri operasi dan pemeliharaan (O&M) pembangkit listrik.</p>

<h3>Mengapa ERM Penting bagi PT MKP?</h3>
<p>Dalam industri O&M ketenagalistrikan, kegagalan turbin atau kebocoran pipa boiler dapat memicu kerugian hingga ratusan ribu dolar per jam akibat <strong>unplanned downtime</strong>. Oleh karena itu, pemahaman mendalam tentang ERM menjadi kebutuhan strategis.</p>

<ul>
<li><strong>Melindungi Nilai:</strong> Mencegah kerugian finansial dari risiko operasional, teknis, dan strategis</li>
<li><strong>Menciptakan Nilai:</strong> Mengubah ketidakpastian menjadi peluang pertumbuhan bisnis</li>
<li><strong>Keunggulan Operasional:</strong> Meningkatkan efisiensi dan keandalan operasi pembangkit</li>
<li><strong>Kepatuhan Regulasi:</strong> Memenuhi standar tata kelola dari PLN NP Services dan regulator</li>
</ul>

<h3>Dua Pilar Standar Global</h3>
<p>PT MKP mendasarkan praktik manajemen risiko pada dua standar internasional utama:</p>
<ul>
<li><strong>ISO 31000:2018</strong> — Berfokus pada penciptaan dan perlindungan nilai melalui prinsip-prinsip manajemen risiko yang terintegrasi</li>
<li><strong>COSO ERM 2017</strong> — Menekankan penyelarasan risiko dengan strategi bisnis dan manajemen performa organisasi</li>
</ul>

<div class="highlight-box">
<div class="highlight-box-title">💡 Inti Pesan</div>
<p>Manajemen risiko bukan tentang menghindari semua risiko, melainkan tentang membuat keputusan yang terinformasi. ERM mengubah cara pandang dari "kewajiban kepatuhan" menjadi "katalis penciptaan nilai dan keunggulan operasional".</p>
</div>

<h3>Landasan Hukum Internal</h3>
<p>Seluruh praktik ERM di PT MKP bertumpu pada <strong>Keputusan Direksi Nomor: 15.K/010/DIR-MKP/2025</strong> tentang Kebijakan Strategis Manajemen Risiko Terintegrasi, yang mengkonvergensi standar global dengan kebutuhan operasional perusahaan.</p>`,
        realityCheck: {
            case: 'Sebuah pembangkit listrik mengalami kegagalan turbin mendadak karena tidak ada sistem peringatan dini yang memadai. Downtime berlangsung selama 72 jam, menyebabkan kerugian lebih dari Rp 15 miliar dan denda penalti dari PLN karena gagal memenuhi kontrak penyediaan daya. Investigasi menunjukkan bahwa risiko kegagalan turbin telah diidentifikasi 6 bulan sebelumnya dalam laporan pemeliharaan, namun tidak ditindaklanjuti karena dianggap "belum mendesak".',
            question: 'Menurut Anda, apa pelajaran utama dari kasus ini tentang pentingnya manajemen risiko terintegrasi?'
        },
        quiz: [
            { id: 'q1-1', question: 'Apa tujuan utama Enterprise Risk Management (ERM) menurut ISO 31000:2018?', options: ['Menghilangkan semua risiko organisasi', 'Menciptakan dan melindungi nilai organisasi', 'Memenuhi persyaratan audit eksternal', 'Mengurangi biaya operasional'], correct: 1 },
            { id: 'q1-2', question: 'Standar global mana yang menekankan penyelarasan risiko dengan strategi bisnis?', options: ['ISO 9001', 'ISO 31000:2018', 'COSO ERM 2017', 'ISO 14001'], correct: 2 },
            { id: 'q1-3', question: 'Skenario: PT MKP menghadapi peluang proyek EBT baru dengan potensi keuntungan tinggi namun risiko teknis signifikan. Bagaimana pendekatan ERM yang tepat?', options: ['Menolak proyek karena berisiko tinggi', 'Menerima tanpa analisis karena keuntungan tinggi', 'Melakukan analisis risiko terstruktur untuk menilai risk-reward ratio', 'Menunggu pesaing mencoba terlebih dahulu'], correct: 2 },
            { id: 'q1-4', question: 'Apa landasan hukum internal manajemen risiko terintegrasi PT MKP?', options: ['UU Ketenagalistrikan No. 30/2009', 'SK Direksi No. 15.K/010/DIR-MKP/2025', 'Peraturan PLN NP No. 01/2024', 'ISO 31000:2018 Klausul 4'], correct: 1 },
            { id: 'q1-5', question: 'Pernyataan berikut yang PALING TEPAT menggambarkan transformasi paradigma ERM adalah:', options: ['Dari pencegahan risiko ke eliminasi risiko', 'Dari kewajiban kepatuhan ke katalis penciptaan nilai', 'Dari tanggung jawab manajemen ke tanggung jawab seluruh karyawan', 'Dari pendekatan kualitatif ke pendekatan kuantitatif'], correct: 1 }
        ],
        reflectionQuestion: 'Dalam pengalaman kerja Anda di PT MKP, apakah pernah ada situasi di mana risiko yang seharusnya bisa diantisipasi justru menjadi masalah karena tidak dikelola dengan baik? Jelaskan singkat.',
    },
    {
        id: 2,
        title: '10 Prinsip Manajemen Risiko PT MKP',
        subtitle: 'Keselarasan dengan ISO 31000:2018',
        module: 'Modul 1: Fondasi dan Tata Kelola Risiko',
        description: 'Membahas 10 prinsip manajemen risiko PT MKP (Integritas, Terintegrasi, Terstruktur, Disesuaikan, Inklusif, Dinamis, Informasi Terbaik, Rahasia, Faktor Manusia, Perbaikan Berkelanjutan) dan pemetaannya dengan ISO 31000.',
        videoUrl: '',
        article: `<h2>10 Prinsip Manajemen Risiko PT MKP</h2>
<p>PT Mitra Karya Prima telah menetapkan 10 prinsip manajemen risiko yang menjadi fondasi seluruh aktivitas pengelolaan risiko. Prinsip-prinsip ini selaras dengan 8 prinsip ISO 31000:2018 (Klausul 4) dan disesuaikan dengan konteks operasional perusahaan.</p>

<h3>1. Integritas</h3>
<p>Seluruh proses manajemen risiko harus dilakukan dengan <strong>kejujuran, transparansi, dan akuntabilitas</strong>. Data risiko tidak boleh dimanipulasi untuk kepentingan tertentu.</p>

<h3>2. Terintegrasi</h3>
<p>Manajemen risiko bukan fungsi terpisah, melainkan <strong>bagian integral dari setiap proses bisnis</strong> — dari perencanaan strategis hingga operasi harian di lapangan.</p>

<h3>3. Terstruktur dan Sistematis</h3>
<p>Pendekatan yang terstruktur menghasilkan hasil yang <strong>konsisten, dapat dibandingkan, dan dapat diaudit</strong>.</p>

<h3>4. Disesuaikan (Customized)</h3>
<p>Kerangka kerja disesuaikan dengan <strong>konteks spesifik PT MKP</strong> sebagai perusahaan O&M pembangkit listrik.</p>

<h3>5. Inklusif</h3>
<p>Melibatkan seluruh pemangku kepentingan yang relevan memastikan <strong>perspektif yang komprehensif</strong> dalam identifikasi dan penilaian risiko.</p>

<h3>6. Dinamis</h3>
<p>Manajemen risiko harus <strong>responsif terhadap perubahan</strong> — baik perubahan lingkungan bisnis, regulasi, maupun kondisi operasional.</p>

<h3>7. Informasi Terbaik yang Tersedia</h3>
<p>Keputusan risiko harus berdasarkan <strong>data dan informasi terbaik</strong> yang tersedia, dengan mempertimbangkan keterbatasan dan ketidakpastian.</p>

<h3>8. Faktor Manusia dan Budaya</h3>
<p>Mengakui bahwa <strong>perilaku manusia dan budaya organisasi</strong> secara signifikan memengaruhi setiap aspek manajemen risiko.</p>

<h3>9. Kerahasiaan</h3>
<p>Informasi risiko yang sensitif harus <strong>dijaga kerahasiaannya</strong> sesuai dengan tingkat klasifikasi yang ditetapkan.</p>

<h3>10. Perbaikan Berkelanjutan</h3>
<p>Sistem manajemen risiko harus secara <strong>terus-menerus ditingkatkan</strong> berdasarkan pembelajaran dan pengalaman.</p>

<div class="highlight-box">
<div class="highlight-box-title">💡 Inti Pesan</div>
<p>10 prinsip ini bukan sekadar daftar yang dihafal, melainkan panduan perilaku yang harus mendasari setiap keputusan dan tindakan terkait risiko di PT MKP.</p>
</div>`,
        realityCheck: {
            case: 'Seorang manajer operasi menemukan indikasi kerusakan pada bearing generator. Karena target produksi yang ketat (prinsip efisiensi), ia memutuskan untuk menunda pemeliharaan hingga jadwal shutdown berikutnya yang masih 3 bulan lagi. Dua minggu kemudian, bearing mengalami kegagalan total yang menyebabkan kerusakan lebih besar.',
            question: 'Prinsip manajemen risiko mana yang dilanggar dalam kasus ini? Bagaimana seharusnya keputusan diambil?'
        },
        quiz: [
            { id: 'q2-1', question: 'Berapa jumlah prinsip manajemen risiko yang ditetapkan PT MKP?', options: ['8 prinsip', '10 prinsip', '12 prinsip', '5 prinsip'], correct: 1 },
            { id: 'q2-2', question: 'Prinsip "Terintegrasi" dalam manajemen risiko berarti:', options: ['Menggunakan software terintegrasi', 'Manajemen risiko menjadi bagian dari setiap proses bisnis', 'Menggabungkan semua divisi dalam satu tim risiko', 'Mengintegrasikan audit internal dan eksternal'], correct: 1 },
            { id: 'q2-3', question: 'Skenario: Tim lapangan melaporkan anomali pada sistem pendingin, tapi data sensor belum dikalibrasi. Berdasarkan prinsip mana keputusan harus diambil?', options: ['Prinsip Efisiensi', 'Prinsip Informasi Terbaik yang Tersedia', 'Prinsip Kerahasiaan', 'Prinsip Perbaikan Berkelanjutan'], correct: 1 },
            { id: 'q2-4', question: 'Prinsip "Disesuaikan" (Customized) penting karena:', options: ['Setiap perusahaan harus membuat standar sendiri', 'Kerangka risiko harus sesuai konteks spesifik organisasi', 'ISO 31000 tidak berlaku untuk industri energi', 'Memungkinkan perusahaan mengabaikan standar global'], correct: 1 },
            { id: 'q2-5', question: 'Prinsip mana yang mengakui bahwa perilaku dan budaya organisasi memengaruhi manajemen risiko?', options: ['Inklusif', 'Dinamis', 'Faktor Manusia dan Budaya', 'Integritas'], correct: 2 }
        ],
        reflectionQuestion: 'Dari 10 prinsip manajemen risiko PT MKP, prinsip mana yang menurut Anda paling perlu diperkuat implementasinya di unit kerja Anda? Mengapa?',
    },
    {
        id: 3,
        title: 'Arsitektur Organisasi Risiko',
        subtitle: 'Implementasi Three-Lines Model',
        module: 'Modul 1: Fondasi dan Tata Kelola Risiko',
        description: 'Memahami peran First Lines (Pemilik Proses Bisnis), Second Lines (Fungsi MR & Kepatuhan), dan Third Lines (Audit Internal) dalam ekosistem PT MKP.',
        videoUrl: '',
        article: `<h2>Three-Lines Model dalam Tata Kelola Risiko</h2>
<p>Three-Lines Model (sebelumnya dikenal sebagai Three Lines of Defense) adalah kerangka kerja tata kelola yang mendefinisikan peran dan tanggung jawab dalam mengelola risiko organisasi. Model ini telah diadopsi oleh PT MKP sebagai arsitektur organisasi risiko utama.</p>

<h3>First Line: Pemilik Proses Bisnis</h3>
<ul>
<li>Manajemen operasional dan supervisor lapangan</li>
<li><strong>Bertanggung jawab langsung</strong> atas identifikasi, penilaian, dan mitigasi risiko di area kerja mereka</li>
<li>Menjalankan kontrol internal sehari-hari</li>
<li>Contoh: Manajer Unit Pembangkit, Supervisor Pemeliharaan</li>
</ul>

<h3>Second Line: Fungsi Manajemen Risiko & Kepatuhan</h3>
<ul>
<li>Fungsi pengawasan dan pemantauan independen</li>
<li><strong>Membangun kerangka kerja</strong>, kebijakan, dan metodologi manajemen risiko</li>
<li>Memantau efektivitas First Line dalam mengelola risiko</li>
<li>Contoh: Tim Manajemen Risiko Korporat, Fungsi Kepatuhan</li>
</ul>

<h3>Third Line: Audit Internal</h3>
<ul>
<li>Memberikan <strong>assurance independen</strong> kepada Dewan Direksi</li>
<li>Mengevaluasi efektivitas keseluruhan sistem manajemen risiko</li>
<li>Memberikan rekomendasi perbaikan berdasarkan temuan audit</li>
</ul>

<div class="highlight-box">
<div class="highlight-box-title">💡 Inti Pesan</div>
<p>Three-Lines Model bukan tentang "siapa yang bersalah", melainkan tentang memastikan bahwa setiap level organisasi memiliki peran yang jelas dalam ekosistem pengelolaan risiko — dari eksekusi di lapangan hingga assurance di level tertinggi.</p>
</div>`,
        realityCheck: {
            case: 'Di sebuah unit pembangkit, terjadi insiden kebocoran oli pada sistem turbin. First Line (operator lapangan) melaporkan kejadian tersebut, namun Second Line (Tim Manajemen Risiko) terlambat merespons karena menganggap laporan tersebut sudah ditangani. Third Line (Audit Internal) baru menemukan bahwa insiden serupa telah terjadi 3 kali dalam 6 bulan terakhir tanpa ada perbaikan sistemik.',
            question: 'Pada lini mana terjadi kegagalan utama dalam kasus ini? Bagaimana Three-Lines Model seharusnya bekerja?'
        },
        quiz: [
            { id: 'q3-1', question: 'Siapa yang termasuk First Line dalam Three-Lines Model di PT MKP?', options: ['Tim Audit Internal', 'Tim Manajemen Risiko Korporat', 'Pemilik Proses Bisnis / Manajemen Operasional', 'Dewan Komisaris'], correct: 2 },
            { id: 'q3-2', question: 'Fungsi utama Second Line dalam Three-Lines Model adalah:', options: ['Melakukan audit tahunan', 'Membangun kerangka kerja dan memantau efektivitas First Line', 'Menjalankan operasi harian', 'Menyetujui anggaran risiko'], correct: 1 },
            { id: 'q3-3', question: 'Skenario: Seorang supervisor menemukan retak pada pipa boiler. Sebagai First Line, apa yang harus dilakukan PERTAMA?', options: ['Langsung memperbaiki sendiri', 'Melaporkan ke Audit Internal', 'Mengidentifikasi dan menilai risiko, lalu mengambil tindakan mitigasi awal', 'Menunggu instruksi dari manajemen pusat'], correct: 2 },
            { id: 'q3-4', question: 'Third Line (Audit Internal) memberikan assurance kepada:', options: ['Manajer Operasional', 'Supervisor Lapangan', 'Dewan Direksi dan pemangku kepentingan', 'Vendor dan supplier'], correct: 2 },
            { id: 'q3-5', question: 'Kelemahan utama jika Three-Lines Model tidak diimplementasikan dengan baik adalah:', options: ['Biaya operasional meningkat', 'Tidak ada kejelasan siapa yang bertanggung jawab atas risiko', 'Karyawan terlalu banyak meeting', 'Audit menjadi lebih sering'], correct: 1 }
        ],
        reflectionQuestion: 'Dalam struktur organisasi unit Anda, apakah pembagian peran Three-Lines Model sudah berjalan efektif? Bagian mana yang perlu diperbaiki?',
    },
    {
        id: 4,
        title: 'Pengambilan Keputusan Berbasis Risiko',
        subtitle: 'Integrasi GRC dan Four Eyes Principle',
        module: 'Modul 1: Fondasi dan Tata Kelola Risiko',
        description: 'Konsep Maker, Checker/Reviewer, Approver, Signer dalam inisiasi proyek/program kerja berdasarkan Business Judgement Rules.',
        videoUrl: '',
        article: `<h2>Four Eyes Principle (4EP) dalam Pengambilan Keputusan</h2>
<p>Four Eyes Principle adalah mekanisme kontrol yang mengharuskan setiap keputusan penting ditinjau oleh setidaknya dua pihak independen. Di PT MKP, prinsip ini diimplementasikan melalui sistem <strong>Maker-Checker-Approver-Signer (MCAS)</strong>.</p>

<h3>Peran dalam MCAS</h3>
<ul>
<li><strong>Maker:</strong> Pihak yang menyusun proposal, analisis risiko, atau rencana kerja. Bertanggung jawab atas kelengkapan dan akurasi data.</li>
<li><strong>Checker/Reviewer:</strong> Pihak yang melakukan review independen terhadap output Maker. Memverifikasi kebenaran data dan kewajaran asumsi.</li>
<li><strong>Approver:</strong> Pihak yang memiliki kewenangan untuk menyetujui atau menolak berdasarkan pertimbangan risiko dan strategi.</li>
<li><strong>Signer:</strong> Pihak yang menandatangani keputusan final, menegaskan akuntabilitas hukum dan tata kelola.</li>
</ul>

<h3>Governance, Risk, and Compliance (GRC)</h3>
<p>4EP merupakan bagian dari kerangka GRC yang lebih luas. Integrasi GRC memastikan bahwa:</p>
<ul>
<li><strong>Governance:</strong> Struktur pengambilan keputusan yang jelas dan terdokumentasi</li>
<li><strong>Risk:</strong> Setiap keputusan mempertimbangkan profil risiko yang terukur</li>
<li><strong>Compliance:</strong> Kepatuhan terhadap regulasi internal dan eksternal terjamin</li>
</ul>

<h3>Business Judgement Rules</h3>
<p>Dalam konteks PT MKP, Business Judgement Rules melindungi pengambil keputusan dari pertanggungjawaban hukum selama keputusan diambil dengan:</p>
<ul>
<li>Itikad baik (good faith)</li>
<li>Untuk kepentingan terbaik perusahaan</li>
<li>Berdasarkan informasi yang memadai</li>
<li>Tanpa konflik kepentingan</li>
</ul>

<div class="highlight-box">
<div class="highlight-box-title">💡 Inti Pesan</div>
<p>Four Eyes Principle bukan birokrasi tambahan — ia adalah mekanisme perlindungan yang memastikan tidak ada keputusan penting yang dibuat secara sepihak, mengurangi risiko bias kognitif dan fraud.</p>
</div>`,
        realityCheck: {
            case: 'Seorang manajer proyek menyetujui pengadaan spare part kritis senilai Rp 2 miliar tanpa melalui proses review oleh Tim Pengadaan dan persetujuan Direksi. Ia berargumen bahwa situasinya "darurat" dan menunggu proses formal akan menyebabkan keterlambatan. Ternyata harga yang disetujui 40% lebih tinggi dari harga pasar.',
            question: 'Bagaimana Four Eyes Principle seharusnya diterapkan dalam situasi darurat seperti ini?'
        },
        quiz: [
            { id: 'q4-1', question: 'Apa kepanjangan MCAS dalam Four Eyes Principle PT MKP?', options: ['Management Control and Audit System', 'Maker, Checker, Approver, Signer', 'Monitoring, Compliance, Assessment, Supervision', 'Multi-Channel Approval Standard'], correct: 1 },
            { id: 'q4-2', question: 'Peran "Checker/Reviewer" dalam 4EP adalah:', options: ['Menyusun proposal awal', 'Melakukan review independen terhadap output Maker', 'Menandatangani dokumen final', 'Menjalankan audit pasca-keputusan'], correct: 1 },
            { id: 'q4-3', question: 'Skenario: Tim operasi ingin mengubah parameter operasi turbin untuk meningkatkan efisiensi. Siapa yang harus terlibat dalam MCAS?', options: ['Cukup Manajer Operasi sebagai Approver', 'Operator (Maker), Supervisor (Checker), Manajer (Approver), GM (Signer)', 'Semua karyawan unit harus memberikan suara', 'Hanya perlu persetujuan Direksi'], correct: 1 },
            { id: 'q4-4', question: 'Business Judgement Rules melindungi pengambil keputusan JIKA:', options: ['Keputusan menghasilkan keuntungan', 'Keputusan diambil berdasarkan itikad baik dan informasi memadai', 'Semua risiko berhasil dieliminasi', 'Tidak ada pihak yang keberatan'], correct: 1 },
            { id: 'q4-5', question: 'Tujuan utama integrasi GRC dalam pengambilan keputusan adalah:', options: ['Memperlambat proses agar lebih hati-hati', 'Memastikan keputusan mempertimbangkan tata kelola, risiko, dan kepatuhan secara terpadu', 'Mengurangi jumlah pengambil keputusan', 'Memindahkan tanggung jawab ke Tim Kepatuhan'], correct: 1 }
        ],
        reflectionQuestion: 'Apakah di unit kerja Anda sudah menerapkan Four Eyes Principle secara konsisten? Berikan contoh keputusan yang menurut Anda perlu mekanisme MCAS lebih ketat.',
    },
    {
        id: 5,
        title: 'Menyelaraskan Sasaran Bisnis dan Risk Appetite',
        subtitle: 'Selera Risiko dan Parameter Risiko',
        module: 'Modul 2: Strategi, Konteks, dan Parameter Risiko',
        description: 'Hirarki parameter risiko: Risk Capacity, Risk Tolerance, Risk Appetite, Risk Limit, serta 4 sikap risiko PT MKP.',
        videoUrl: '',
        article: `<h2>Hirarki Parameter Risiko</h2>
<p>Untuk mengelola risiko secara efektif, PT MKP menetapkan hirarki parameter risiko yang jelas sebagai panduan pengambilan keputusan strategis dan operasional.</p>

<h3>Risk Capacity (Kapasitas Risiko)</h3>
<p>Jumlah <strong>maksimum risiko yang dapat ditanggung</strong> organisasi tanpa mengancam kelangsungan bisnis. Ini adalah batas absolut yang dihitung berdasarkan kekuatan finansial, aset, dan kemampuan operasional.</p>

<h3>Risk Appetite (Selera Risiko)</h3>
<p>Jumlah dan jenis risiko yang <strong>bersedia diterima</strong> organisasi dalam mengejar sasaran strategisnya. Risk appetite ditetapkan oleh Direksi dan mencerminkan strategi bisnis perusahaan.</p>

<h3>Risk Tolerance (Toleransi Risiko)</h3>
<p>Variasi yang dapat diterima terhadap pencapaian target dalam batas Risk Appetite. Ini adalah <strong>rentang penyimpangan yang masih bisa ditoleransi</strong>.</p>

<h3>Risk Limit (Batas Risiko)</h3>
<p>Batas operasional spesifik yang ditetapkan untuk unit kerja atau proses tertentu, merupakan <strong>turunan langsung dari Risk Appetite</strong>.</p>

<h3>4 Sikap Risiko PT MKP</h3>
<ul>
<li><strong>Tidak Toleran (Averse):</strong> Tidak menerima risiko apapun — diterapkan pada K3 dan keselamatan</li>
<li><strong>Konservatif (Cautious):</strong> Menerima risiko minimal dengan kontrol ketat — diterapkan pada kepatuhan regulasi</li>
<li><strong>Moderat (Open):</strong> Menerima risiko terukur untuk peluang — diterapkan pada operasi rutin</li>
<li><strong>Strategis (Seeking):</strong> Aktif mengambil risiko untuk pertumbuhan — diterapkan pada ekspansi bisnis EBT</li>
</ul>

<div class="highlight-box">
<div class="highlight-box-title">💡 Inti Pesan</div>
<p>Risk Appetite bukan satu angka tunggal — ia adalah pernyataan strategis yang berbeda untuk setiap kategori risiko. Keselarasan antara sasaran bisnis dan selera risiko memastikan perusahaan tidak mengambil risiko berlebihan atau terlalu konservatif sehingga kehilangan peluang.</p>
</div>`,
        realityCheck: {
            case: 'PT MKP memiliki Risk Appetite "Moderat" untuk risiko operasional dengan Risk Limit kerugian maksimal Rp 5 miliar per tahun per unit. Sebuah unit pembangkit mengidentifikasi potensi risiko kerusakan komponen kritis dengan estimasi dampak Rp 8 miliar, namun manajer unit memutuskan untuk tetap beroperasi karena probabilitasnya dianggap rendah.',
            question: 'Apakah keputusan manajer unit tersebut sesuai dengan hirarki parameter risiko PT MKP? Jelaskan.'
        },
        quiz: [
            { id: 'q5-1', question: 'Urutan hirarki parameter risiko dari yang paling besar ke kecil adalah:', options: ['Risk Appetite > Risk Capacity > Risk Tolerance > Risk Limit', 'Risk Capacity > Risk Appetite > Risk Tolerance > Risk Limit', 'Risk Limit > Risk Tolerance > Risk Appetite > Risk Capacity', 'Risk Tolerance > Risk Capacity > Risk Limit > Risk Appetite'], correct: 1 },
            { id: 'q5-2', question: 'Sikap risiko "Tidak Toleran (Averse)" di PT MKP diterapkan pada:', options: ['Ekspansi bisnis baru', 'Keselamatan dan K3', 'Operasi rutin pembangkit', 'Pengembangan SDM'], correct: 1 },
            { id: 'q5-3', question: 'Risk Appetite ditetapkan oleh:', options: ['Manajer Operasional', 'Supervisor Lapangan', 'Direksi', 'Tim Audit Internal'], correct: 2 },
            { id: 'q5-4', question: 'Skenario: Unit bisnis ingin mengambil proyek baru dengan potensi kerugian melebihi Risk Limit yang ditetapkan. Tindakan yang tepat adalah:', options: ['Langsung menolak proyek', 'Eskalasi ke level yang berwenang untuk mendapat persetujuan khusus', 'Mengubah Risk Limit tanpa persetujuan Direksi', 'Mengurangi estimasi kerugian agar sesuai Risk Limit'], correct: 1 },
            { id: 'q5-5', question: 'Perbedaan utama antara Risk Capacity dan Risk Appetite adalah:', options: ['Risk Capacity lebih kecil dari Risk Appetite', 'Risk Capacity adalah batas absolut, Risk Appetite adalah pilihan strategis', 'Keduanya sama, hanya berbeda istilah', 'Risk Appetite ditetapkan regulasi, Risk Capacity oleh perusahaan'], correct: 1 }
        ],
        reflectionQuestion: 'Berdasarkan pemahaman Anda tentang Risk Appetite, menurut Anda sikap risiko mana yang paling sesuai untuk unit kerja Anda saat ini? Mengapa?',
    },
];

// Topics 6-20 will be in modules2.js
