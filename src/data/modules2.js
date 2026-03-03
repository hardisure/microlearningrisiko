// Topics 6-20: Content from PDF curriculum
export const MODULES_2 = [
    {
        id: 6, title: 'Perencanaan Strategis Berbasis Risiko', subtitle: 'Integrasi dalam RJPP dan RKAP',
        module: 'Modul 2: Strategi, Konteks, dan Parameter Risiko',
        description: 'Alur penetapan RKAP berbasis risiko, di mana target bisnis dikalibrasi dengan Inherent Risk dan Residual Risk.',
        videoUrl: '',
        article: `<h2>Perencanaan Strategis Berbasis Risiko</h2><p>Perencanaan strategis yang efektif harus mengintegrasikan analisis risiko sejak tahap awal. Di PT MKP, setiap target dalam RJPP dan RKAP harus dikalibrasi dengan profil risiko.</p><h3>Integrasi Risiko dalam RKAP</h3><ul><li><strong>Identifikasi Inherent Risk</strong> pada setiap target bisnis</li><li><strong>Evaluasi Residual Risk</strong> setelah penerapan kontrol</li><li><strong>Kalibrasi Target:</strong> Target laba disesuaikan dengan tingkat risiko yang dapat diterima</li></ul><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>RKAP tanpa analisis risiko adalah rencana yang rapuh. Integrasi ERM dalam perencanaan strategis memastikan target yang ambisius namun realistis.</p></div>`,
        realityCheck: { case: 'Unit pembangkit menetapkan target produksi 10% lebih tinggi dari tahun lalu tanpa mempertimbangkan risiko aging equipment. Hasilnya, unplanned downtime meningkat 25%.', question: 'Bagaimana seharusnya risiko aging equipment diintegrasikan dalam penetapan target RKAP?' },
        quiz: [
            { id: 'q6-1', question: 'RKAP berbasis risiko berarti:', options: ['Menghindari target yang menantang', 'Target bisnis dikalibrasi dengan profil risiko', 'Hanya fokus pada risiko finansial', 'Mengurangi semua target sebesar risk margin'], correct: 1 },
            { id: 'q6-2', question: 'Inherent Risk adalah:', options: ['Risiko setelah mitigasi', 'Risiko sebelum penerapan kontrol apapun', 'Risiko yang tidak bisa diidentifikasi', 'Risiko yang sudah diterima'], correct: 1 },
            { id: 'q6-3', question: 'Residual Risk dihitung setelah:', options: ['Identifikasi risiko', 'Penerapan kontrol dan mitigasi', 'Penetapan RKAP', 'Audit internal'], correct: 1 },
            { id: 'q6-4', question: 'Prinsip COSO ERM yang mewajibkan ERM melekat dalam perencanaan strategis disebut:', options: ['Risk Assessment', 'Strategy-Setting', 'Performance Management', 'Information & Communication'], correct: 1 },
            { id: 'q6-5', question: 'Skenario: Target laba Rp 100M ditetapkan tanpa mempertimbangkan risiko kenaikan harga spare part 30%. Apa yang seharusnya dilakukan?', options: ['Tetap menjalankan target', 'Menyesuaikan target dengan skenario risiko harga', 'Menghilangkan risiko sepenuhnya', 'Menunda penetapan target'], correct: 1 }
        ],
        reflectionQuestion: 'Apakah proses perencanaan di unit Anda sudah mempertimbangkan analisis risiko? Berikan contoh.',
    },
    {
        id: 7, title: 'Penetapan Konteks dan Taksonomi Risiko', subtitle: 'Risk Breakdown Structure',
        module: 'Modul 2: Strategi, Konteks, dan Parameter Risiko',
        description: 'Pemetaan taksonomi risiko PT MKP yang selaras dengan PLN NP Services berdasarkan ISO 31000 Klausul 6.3.',
        videoUrl: '',
        article: `<h2>Konteks dan Taksonomi Risiko</h2><p>Sebelum melakukan penilaian risiko, organisasi harus menetapkan konteks internal dan eksternal serta menyusun taksonomi risiko yang terstruktur.</p><h3>Penetapan Konteks (ISO 31000 Klausul 6.3)</h3><ul><li><strong>Konteks Eksternal:</strong> Regulasi, pasar energi, kondisi makroekonomi</li><li><strong>Konteks Internal:</strong> Struktur organisasi, budaya, kapabilitas SDM, kondisi aset</li><li><strong>Kriteria Risiko:</strong> Standar yang digunakan untuk mengevaluasi signifikansi risiko</li></ul><h3>Risk Breakdown Structure (RBS)</h3><p>RBS adalah klasifikasi hierarkis seluruh risiko organisasi ke dalam kategori dan subkategori yang terstruktur.</p><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>Taksonomi risiko yang baik seperti peta — tanpa peta yang akurat, Anda tidak bisa menavigasi lanskap risiko organisasi secara efektif.</p></div>`,
        realityCheck: { case: 'Dua unit pembangkit menggunakan klasifikasi risiko yang berbeda sehingga risiko yang sama dilaporkan dengan nama dan kategori berbeda. Hal ini menyulitkan konsolidasi laporan risiko di level korporat.', question: 'Mengapa standardisasi taksonomi risiko penting untuk organisasi?' },
        quiz: [
            { id: 'q7-1', question: 'Penetapan konteks risiko mencakup:', options: ['Hanya konteks internal', 'Hanya konteks eksternal', 'Konteks internal, eksternal, dan kriteria risiko', 'Hanya kriteria risiko'], correct: 2 },
            { id: 'q7-2', question: 'Risk Breakdown Structure (RBS) adalah:', options: ['Daftar risiko terburuk', 'Klasifikasi hierarkis risiko ke dalam kategori terstruktur', 'Laporan hasil audit risiko', 'Rencana mitigasi risiko'], correct: 1 },
            { id: 'q7-3', question: 'Konteks eksternal PT MKP meliputi:', options: ['Struktur organisasi internal', 'Regulasi, pasar energi, kondisi makroekonomi', 'Budaya perusahaan', 'Kapabilitas SDM'], correct: 1 },
            { id: 'q7-4', question: 'ISO 31000 Klausul 6.3 membahas tentang:', options: ['Perlakuan risiko', 'Ruang lingkup, konteks, dan kriteria', 'Pemantauan dan review', 'Komunikasi dan konsultasi'], correct: 1 },
            { id: 'q7-5', question: 'Taksonomi risiko PT MKP harus selaras dengan:', options: ['ISO 9001', 'PLN NP Services', 'Bank Indonesia', 'Kementerian BUMN'], correct: 1 }
        ],
        reflectionQuestion: 'Apa kategori risiko utama yang paling relevan untuk unit kerja Anda? Jelaskan alasannya.',
    },
    {
        id: 8, title: 'Teknik Identifikasi Peristiwa Risiko', subtitle: 'Root Cause Analysis',
        module: 'Modul 3: Proses Penilaian Risiko',
        description: 'Membedakan peristiwa, dampak, dan penyebab menggunakan Fault Tree Analysis, Fishbone, RCA, dan FMEA.',
        videoUrl: '',
        article: `<h2>Teknik Identifikasi Risiko</h2><p>Identifikasi risiko yang efektif harus membedakan dengan jelas antara <strong>peristiwa risiko, dampak, dan akar penyebab</strong>. Identifikasi yang hanya berupa negasi sasaran ("gagal mencapai target") bukan identifikasi risiko yang baik.</p><h3>Teknik-teknik Utama</h3><ul><li><strong>Fault Tree Analysis (FTA):</strong> Analisis top-down dari kejadian yang tidak diinginkan</li><li><strong>Fishbone Diagram:</strong> Identifikasi penyebab berdasarkan kategori (Man, Machine, Method, Material)</li><li><strong>Root Cause Analysis (RCA):</strong> Menggali akar masalah sesungguhnya di balik peristiwa</li><li><strong>FMEA:</strong> Failure Mode and Effects Analysis untuk menganalisis potensi kegagalan</li></ul><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>Identifikasi risiko yang baik adalah fondasi dari seluruh proses manajemen risiko. Jika identifikasi salah, analisis dan mitigasi pasti salah.</p></div>`,
        realityCheck: { case: 'Tim identifikasi risiko mencatat "penurunan produksi" sebagai risiko utama. Padahal penurunan produksi adalah dampak, bukan peristiwa risiko. Penyebab sebenarnya bisa berupa kegagalan komponen, keterlambatan spare part, atau human error.', question: 'Bagaimana Anda akan menggunakan Fishbone Diagram untuk mengidentifikasi akar penyebab penurunan produksi?' },
        quiz: [
            { id: 'q8-1', question: 'Identifikasi risiko berupa "gagal mencapai target laba" adalah contoh:', options: ['Identifikasi yang baik dan spesifik', 'Negasi sasaran yang bukan identifikasi risiko yang tepat', 'Root cause yang valid', 'Dampak finansial yang terukur'], correct: 1 },
            { id: 'q8-2', question: 'Fishbone Diagram mengkategorikan penyebab berdasarkan:', options: ['Probabilitas dan dampak', 'Man, Machine, Method, Material, dll', 'High, Medium, Low', 'Internal dan eksternal'], correct: 1 },
            { id: 'q8-3', question: 'FMEA adalah singkatan dari:', options: ['Financial Management and Evaluation Analysis', 'Failure Mode and Effects Analysis', 'Functional Measurement and Efficiency Assessment', 'Fault Management and Error Assessment'], correct: 1 },
            { id: 'q8-4', question: 'Root Cause Analysis bertujuan untuk:', options: ['Menemukan siapa yang bertanggung jawab', 'Menggali akar masalah sesungguhnya', 'Menghitung dampak finansial', 'Membuat laporan insiden'], correct: 1 },
            { id: 'q8-5', question: 'Fault Tree Analysis menggunakan pendekatan:', options: ['Bottom-up', 'Top-down dari kejadian yang tidak diinginkan', 'Horizontal', 'Random sampling'], correct: 1 }
        ],
        reflectionQuestion: 'Teknik identifikasi risiko mana yang paling cocok untuk diterapkan di unit kerja Anda? Mengapa?',
    },
    {
        id: 9, title: 'Desain Key Risk Indicator (KRI)', subtitle: 'Early Warning System',
        module: 'Modul 3: Proses Penilaian Risiko',
        description: 'Merumuskan KRI yang bersifat leading indicator dengan 3 batas ambang: Bahaya, Hati-hati, dan Aman.',
        videoUrl: '',
        article: `<h2>Key Risk Indicator (KRI)</h2><p>KRI adalah metrik yang memberikan <strong>sinyal peringatan dini</strong> tentang peningkatan eksposur risiko. KRI yang baik bersifat leading indicator — memberikan peringatan SEBELUM risiko terjadi.</p><h3>3 Batas Ambang (Threshold)</h3><ul><li><strong>🟢 Aman:</strong> Indikator dalam batas normal, tidak perlu tindakan khusus</li><li><strong>🟡 Hati-hati:</strong> Indikator mendekati batas, perlu pemantauan intensif</li><li><strong>🔴 Bahaya:</strong> Indikator melampaui batas, perlu tindakan segera</li></ul><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>KRI yang baik seperti lampu dashboard mobil — memberi peringatan sebelum mesin rusak, bukan setelah mogok di jalan.</p></div>`,
        realityCheck: { case: 'Sebuah unit tidak memiliki KRI untuk vibrasi turbin. Ketika vibrasi meningkat secara gradual selama 2 bulan, tidak ada yang menyadari sampai turbin mengalami kegagalan bearing.', question: 'Bagaimana KRI dengan 3 threshold bisa mencegah kejadian ini?' },
        quiz: [
            { id: 'q9-1', question: 'KRI yang baik bersifat:', options: ['Lagging indicator', 'Leading indicator', 'Coincident indicator', 'Reactive indicator'], correct: 1 },
            { id: 'q9-2', question: '3 batas ambang KRI di PT MKP adalah:', options: ['Rendah, Sedang, Tinggi', 'Aman, Hati-hati, Bahaya', 'Minor, Major, Critical', 'Green, Amber, Red (tanpa definisi specific)'], correct: 1 },
            { id: 'q9-3', question: 'Ketika KRI berada di zona "Hati-hati", tindakan yang tepat adalah:', options: ['Tidak perlu tindakan', 'Pemantauan intensif dan persiapan mitigasi', 'Shutdown segera', 'Membuat KRI baru'], correct: 1 },
            { id: 'q9-4', question: 'Contoh KRI leading indicator untuk risiko kerusakan mesin:', options: ['Jumlah kerusakan tahun lalu', 'Tingkat vibrasi mesin saat ini', 'Total biaya perbaikan', 'Jumlah laporan insiden'], correct: 1 },
            { id: 'q9-5', question: 'KRI berbeda dari KPI karena:', options: ['KRI mengukur pencapaian target, KPI mengukur risiko', 'KRI mengukur eksposur risiko, KPI mengukur pencapaian kinerja', 'Keduanya sama', 'KRI hanya untuk keuangan'], correct: 1 }
        ],
        reflectionQuestion: 'Apa KRI yang paling penting untuk dipantau di unit kerja Anda? Apakah sudah ada threshold yang jelas?',
    },
    {
        id: 10, title: 'Evaluasi Efektivitas Existing Control', subtitle: 'Pengendalian Saat Ini',
        module: 'Modul 3: Proses Penilaian Risiko',
        description: 'Menilai kecukupan desain kontrol (SOP, sistem) dan efektivitas pelaksanaan kontrol di lapangan.',
        videoUrl: '',
        article: `<h2>Evaluasi Existing Control</h2><p>Sebelum merancang mitigasi baru, organisasi harus mengevaluasi <strong>efektivitas kontrol yang sudah ada</strong>. Evaluasi mencakup dua dimensi utama.</p><h3>Kecukupan Desain Kontrol</h3><p>Apakah SOP, sistem, dan prosedur yang ada sudah <strong>dirancang dengan tepat</strong> untuk mengelola risiko yang ditargetkan?</p><h3>Efektivitas Pelaksanaan</h3><ul><li><strong>Efektif:</strong> Kontrol berjalan sesuai desain dan mengurangi risiko secara signifikan</li><li><strong>Sebagian Efektif:</strong> Kontrol berjalan tapi dengan gap atau inkonsistensi</li><li><strong>Tidak Efektif:</strong> Kontrol tidak dijalankan atau tidak mengurangi risiko</li></ul><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>SOP yang bagus di atas kertas tapi tidak dijalankan di lapangan sama saja dengan tidak memiliki kontrol. Evaluasi harus mencakup desain DAN pelaksanaan.</p></div>`,
        realityCheck: { case: 'Audit menemukan bahwa SOP pengecekan harian boiler sudah sangat komprehensif, namun di lapangan hanya 40% checklist yang benar-benar diisi. Sisanya hanya ditandatangani tanpa pengecekan aktual.', question: 'Apakah kontrol ini efektif, sebagian efektif, atau tidak efektif? Jelaskan.' },
        quiz: [
            { id: 'q10-1', question: 'Dua dimensi evaluasi existing control adalah:', options: ['Biaya dan manfaat', 'Kecukupan desain dan efektivitas pelaksanaan', 'Internal dan eksternal', 'Preventif dan detektif'], correct: 1 },
            { id: 'q10-2', question: 'Kontrol yang "Sebagian Efektif" berarti:', options: ['Kontrol tidak ada', 'Kontrol berjalan tapi dengan gap atau inkonsistensi', 'Kontrol sangat efektif', 'Kontrol perlu dihapus'], correct: 1 },
            { id: 'q10-3', question: 'SOP yang komprehensif tapi tidak dijalankan di lapangan dinilai sebagai:', options: ['Desain baik, pelaksanaan tidak efektif', 'Desain buruk, pelaksanaan baik', 'Efektif secara keseluruhan', 'Tidak perlu dievaluasi'], correct: 0 },
            { id: 'q10-4', question: 'Evaluasi existing control dilakukan SEBELUM:', options: ['Identifikasi risiko', 'Penetapan konteks', 'Perancangan mitigasi baru', 'Pelaporan ke Direksi'], correct: 2 },
            { id: 'q10-5', question: 'Kerangka evaluasi kontrol dalam COSO disebut:', options: ['Risk Assessment', 'Internal Control Framework', 'Strategic Planning', 'Performance Measurement'], correct: 1 }
        ],
        reflectionQuestion: 'Apakah ada kontrol di unit Anda yang desainnya bagus tapi pelaksanaannya kurang efektif? Berikan contoh.',
    },
];
