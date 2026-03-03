// Topics 11-15
export const MODULES_3 = [
    {
        id: 11, title: 'Kuantifikasi Eksposur Risiko', subtitle: 'Dampak Finansial dan Non-Finansial',
        module: 'Modul 3: Proses Penilaian Risiko',
        description: 'Rumus Eksposur Kuantitatif (Probabilitas x Dampak Rupiah) dan Kualitatif (Probabilitas x Skor Dampak x 1% Risk Limit).',
        videoUrl: '',
        article: `<h2>Kuantifikasi Eksposur Risiko</h2><p>Kuantifikasi risiko mengubah penilaian subjektif menjadi angka yang <strong>terukur dan dapat diperbandingkan</strong>.</p><h3>Pendekatan Kuantitatif</h3><p><strong>Eksposur = Probabilitas × Dampak (Rupiah)</strong></p><p>Contoh: Risiko kerusakan turbin dengan probabilitas 10% dan dampak Rp 50M = Eksposur Rp 5M.</p><h3>Pendekatan Kualitatif</h3><p><strong>Eksposur = Probabilitas × Skor Dampak × 1% Risk Limit</strong></p><p>Digunakan untuk risiko non-finansial seperti reputasi, keselamatan, dan lingkungan.</p><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>Kuantifikasi risiko memungkinkan perbandingan apple-to-apple antar risiko yang berbeda jenis, membantu pengambilan keputusan prioritas yang lebih objektif.</p></div>`,
        realityCheck: { case: 'Dua risiko diidentifikasi: (A) Kebocoran oli dengan probabilitas 80% dan dampak Rp 100 juta, (B) Kegagalan turbin dengan probabilitas 5% dan dampak Rp 10 miliar. Tanpa kuantifikasi, tim memilih fokus pada risiko A karena "lebih sering terjadi".', question: 'Hitunglah eksposur kedua risiko. Mana yang seharusnya menjadi prioritas?' },
        quiz: [
            { id: 'q11-1', question: 'Rumus eksposur risiko kuantitatif adalah:', options: ['Dampak ÷ Probabilitas', 'Probabilitas × Dampak (Rupiah)', 'Dampak − Probabilitas', 'Probabilitas + Dampak'], correct: 1 },
            { id: 'q11-2', question: 'Risiko dengan probabilitas 20% dan dampak Rp 1 miliar memiliki eksposur:', options: ['Rp 200 juta', 'Rp 1 miliar', 'Rp 800 juta', 'Rp 20 juta'], correct: 0 },
            { id: 'q11-3', question: 'Pendekatan kualitatif cocok untuk risiko:', options: ['Finansial murni', 'Non-finansial seperti reputasi dan keselamatan', 'Yang sudah terkuantifikasi', 'Yang tidak signifikan'], correct: 1 },
            { id: 'q11-4', question: 'Cost-Benefit Analysis pada mitigasi risiko bertujuan untuk:', options: ['Memastikan biaya mitigasi tidak melebihi nilai risiko', 'Menghilangkan semua risiko', 'Mengurangi anggaran mitigasi', 'Membandingkan risiko keuangan saja'], correct: 0 },
            { id: 'q11-5', question: 'ISO 31000 Klausul 6.4.3 membahas tentang:', options: ['Identifikasi risiko', 'Analisis risiko (kuantitatif dan kualitatif)', 'Perlakuan risiko', 'Pemantauan risiko'], correct: 1 }
        ],
        reflectionQuestion: 'Apakah unit kerja Anda sudah melakukan kuantifikasi eksposur risiko? Jika belum, apa hambatan utamanya?',
    },
    {
        id: 12, title: 'Pemetaan Heatmap dan Risk Level', subtitle: 'Matriks 5x5 dan Prioritas Risiko',
        module: 'Modul 3: Proses Penilaian Risiko',
        description: 'Matriks skala dampak dan probabilitas untuk menentukan 5 Level Risiko (Low hingga High).',
        videoUrl: '',
        article: `<h2>Heatmap Risiko 5×5</h2><p>Heatmap risiko adalah alat visual yang memetakan risiko berdasarkan <strong>probabilitas kejadian dan dampak</strong> dalam matriks 5×5.</p><h3>Skala Probabilitas</h3><ul><li>1 - Sangat Jarang (< 5%)</li><li>2 - Jarang (5-25%)</li><li>3 - Mungkin (25-50%)</li><li>4 - Sering (50-75%)</li><li>5 - Hampir Pasti (> 75%)</li></ul><h3>5 Level Risiko</h3><ul><li><strong>Low:</strong> Risiko dapat diterima, pemantauan rutin</li><li><strong>Low-Medium:</strong> Perlu perhatian dan kontrol dasar</li><li><strong>Medium:</strong> Perlu rencana mitigasi spesifik</li><li><strong>Medium-High:</strong> Perlu eskalasi dan mitigasi prioritas</li><li><strong>High:</strong> Memerlukan tindakan segera dan eskalasi ke Direksi</li></ul><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>Heatmap bukan sekadar grafik — ia adalah alat komunikasi visual yang membantu pengambil keputusan memahami profil risiko organisasi dalam sekejap.</p></div>`,
        realityCheck: { case: 'Dalam rapat risiko triwulanan, 15 risiko dipresentasikan dalam spreadsheet teks panjang. Direksi kesulitan memahami mana yang paling kritis dan perlu perhatian segera.', question: 'Bagaimana heatmap 5×5 dapat memperbaiki komunikasi risiko dalam situasi ini?' },
        quiz: [
            { id: 'q12-1', question: 'Heatmap risiko PT MKP menggunakan matriks:', options: ['3×3', '4×4', '5×5', '6×6'], correct: 2 },
            { id: 'q12-2', question: 'Risiko dengan Level "High" memerlukan:', options: ['Pemantauan rutin saja', 'Tindakan segera dan eskalasi ke Direksi', 'Penghapusan dari daftar risiko', 'Review tahunan'], correct: 1 },
            { id: 'q12-3', question: 'Probabilitas "Mungkin" berada pada rentang:', options: ['< 5%', '5-25%', '25-50%', '> 75%'], correct: 2 },
            { id: 'q12-4', question: 'ISO 31000 Klausul 6.4.4 tentang Evaluasi Risiko bertujuan untuk:', options: ['Menghitung eksposur', 'Membantu pengambilan keputusan perlakuan risiko', 'Mendesain kontrol baru', 'Melaporkan ke regulator'], correct: 1 },
            { id: 'q12-5', question: 'Fungsi utama heatmap risiko adalah:', options: ['Menghitung kerugian', 'Visualisasi profil risiko untuk komunikasi efektif', 'Menggantikan analisis kuantitatif', 'Memenuhi syarat audit'], correct: 1 }
        ],
        reflectionQuestion: 'Apakah unit Anda menggunakan heatmap risiko? Jika ya, bagaimana efektivitasnya dalam mengkomunikasikan risiko?',
    },
    {
        id: 13, title: 'Strategi Perlakuan Risiko', subtitle: 'Accept, Reduce, Transfer, Avoid',
        module: 'Modul 4: Perlakuan dan Konsolidasi Risiko',
        description: 'Memilih opsi mitigasi yang efisien berdasarkan ISO 31000 Klausul 6.5 dengan pertimbangan biaya vs manfaat.',
        videoUrl: '',
        article: `<h2>4 Strategi Perlakuan Risiko</h2><p>Setelah risiko dinilai, organisasi harus memilih strategi perlakuan yang tepat berdasarkan ISO 31000 Klausul 6.5.</p><h3>1. Accept (Menerima)</h3><p>Menerima risiko tanpa tindakan tambahan karena biaya mitigasi melebihi dampak potensial atau risiko berada dalam batas toleransi.</p><h3>2. Reduce (Mengurangi)</h3><p>Mengurangi probabilitas dan/atau dampak melalui kontrol tambahan, prosedur baru, atau investasi teknologi.</p><h3>3. Transfer (Mentransfer)</h3><p>Memindahkan sebagian atau seluruh risiko ke pihak ketiga melalui asuransi, kontrak, atau outsourcing.</p><h3>4. Avoid (Menghindari)</h3><p>Menghentikan aktivitas yang menimbulkan risiko. Hanya dipilih jika tidak ada cara efektif untuk mengelola risiko.</p><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>Prinsip kunci: anggaran mitigasi tidak boleh melebihi nilai risiko yang diturunkan. Perlakuan risiko harus cost-effective dan proporsional.</p></div>`,
        realityCheck: { case: 'Risiko korosi pada pipa boiler memiliki eksposur Rp 2 miliar. Tim mengusulkan penggantian seluruh pipa dengan material premium biaya Rp 5 miliar. Alternatif lain: coating anti-korosi dengan biaya Rp 500 juta yang mengurangi risiko 70%.', question: 'Strategi perlakuan mana yang paling cost-effective? Jelaskan analisis Anda.' },
        quiz: [
            { id: 'q13-1', question: '4 strategi perlakuan risiko menurut ISO 31000 adalah:', options: ['Plan, Do, Check, Act', 'Accept, Reduce, Transfer, Avoid', 'Identify, Assess, Treat, Monitor', 'Prevent, Detect, Correct, Recover'], correct: 1 },
            { id: 'q13-2', question: 'Strategi "Transfer" cocok diterapkan melalui:', options: ['Penambahan SOP', 'Asuransi atau kontrak dengan pihak ketiga', 'Penghentian aktivitas', 'Pelatihan karyawan'], correct: 1 },
            { id: 'q13-3', question: 'Prinsip cost-effectiveness dalam mitigasi berarti:', options: ['Memilih opsi termurah selalu', 'Biaya mitigasi tidak boleh melebihi nilai risiko yang diturunkan', 'Menghindari semua biaya mitigasi', 'Memilih opsi termahal untuk keamanan maksimal'], correct: 1 },
            { id: 'q13-4', question: 'Strategi "Avoid" dipilih ketika:', options: ['Risiko kecil', 'Tidak ada cara efektif mengelola risiko', 'Biaya mitigasi rendah', 'Risiko sudah ditransfer'], correct: 1 },
            { id: 'q13-5', question: 'Skenario: Risiko eksposur Rp 1M, biaya mitigasi Rp 2M. Keputusan terbaik:', options: ['Tetap melakukan mitigasi', 'Accept risiko karena tidak cost-effective', 'Transfer ke asuransi', 'Avoid aktivitasnya'], correct: 1 }
        ],
        reflectionQuestion: 'Berikan contoh risiko di unit Anda dan strategi perlakuan yang paling tepat (Accept/Reduce/Transfer/Avoid). Jelaskan alasannya.',
    },
    {
        id: 14, title: 'Dinamika Integrasi dan Agregasi Risiko', subtitle: 'Risiko Portofolio',
        module: 'Modul 4: Perlakuan dan Konsolidasi Risiko',
        description: 'Pendekatan bottom-up untuk mengagregasi risiko dari level unit ke level korporat.',
        videoUrl: '',
        article: `<h2>Agregasi Risiko Portofolio</h2><p>Agregasi risiko adalah proses mengkonsolidasikan risiko dari level unit operasional ke level korporat untuk mendapatkan <strong>gambaran profil risiko menyeluruh</strong>.</p><h3>Pendekatan Bottom-Up</h3><ul><li>Risiko diidentifikasi di level unit operasional</li><li>Dikonsolidasikan ke level divisi</li><li>Diagregasi ke level korporat untuk laporan ke Direksi</li></ul><h3>Korelasi Antar Risiko</h3><p>Risiko yang tampak kecil secara individual bisa menjadi signifikan ketika berkorelasi satu sama lain. Agregasi harus mempertimbangkan efek domino dan interdependensi.</p><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>Profil risiko korporat bukan penjumlahan sederhana dari risiko unit — ia harus mempertimbangkan korelasi, konsentrasi, dan efek portofolio.</p></div>`,
        realityCheck: { case: 'Tiga unit pembangkit masing-masing melaporkan risiko "sedang" untuk keterlambatan spare part. Ketika dikonsolidasikan, ternyata ketiganya bergantung pada satu supplier yang sama. Jika supplier gagal, dampaknya menjadi "sangat tinggi" secara korporat.', question: 'Mengapa agregasi risiko penting untuk mengungkap risiko konsentrasi seperti ini?' },
        quiz: [
            { id: 'q14-1', question: 'Agregasi risiko menggunakan pendekatan:', options: ['Top-down saja', 'Bottom-up dari unit ke korporat', 'Random sampling', 'Horizontal antar divisi'], correct: 1 },
            { id: 'q14-2', question: 'Korelasi antar risiko penting karena:', options: ['Mengurangi jumlah risiko', 'Risiko individual bisa menjadi signifikan ketika berkorelasi', 'Memperumit laporan', 'Hanya penting untuk audit'], correct: 1 },
            { id: 'q14-3', question: 'Risiko konsentrasi terjadi ketika:', options: ['Risiko tersebar merata', 'Banyak risiko bergantung pada satu sumber yang sama', 'Risiko saling mengurangi', 'Setiap unit memiliki risiko berbeda'], correct: 1 },
            { id: 'q14-4', question: 'Efek domino dalam konteks risiko adalah:', options: ['Risiko menghilang secara berurutan', 'Kegagalan satu area memicu kegagalan di area lain', 'Risiko hanya terjadi sekali', 'Mitigasi satu risiko menyelesaikan semua risiko'], correct: 1 },
            { id: 'q14-5', question: 'Laporan risiko korporat harus mencakup:', options: ['Hanya risiko tertinggi dari setiap unit', 'Gambaran profil risiko menyeluruh termasuk korelasi antar risiko', 'Daftar seluruh risiko detail tanpa filter', 'Hanya risiko finansial'], correct: 1 }
        ],
        reflectionQuestion: 'Apakah ada risiko di unit Anda yang mungkin berkorelasi dengan risiko di unit lain? Jelaskan potensi efek domino-nya.',
    },
    {
        id: 15, title: 'Pelaporan Risiko Efektif', subtitle: 'Dashboard dan Komunikasi ke Stakeholder',
        module: 'Modul 4: Perlakuan dan Konsolidasi Risiko',
        description: 'Menyusun laporan risiko yang informatif untuk berbagai level pemangku kepentingan.',
        videoUrl: '',
        article: `<h2>Pelaporan Risiko yang Efektif</h2><p>Laporan risiko harus <strong>disesuaikan dengan audiens</strong> — Direksi membutuhkan ringkasan eksekutif, sementara manajer operasional membutuhkan detail teknis.</p><h3>Prinsip Pelaporan Risiko</h3><ul><li><strong>Tepat Waktu:</strong> Laporan harus tersedia saat keputusan perlu diambil</li><li><strong>Relevan:</strong> Informasi yang disajikan sesuai kebutuhan audiens</li><li><strong>Akurat:</strong> Data berdasarkan fakta dan metodologi yang konsisten</li><li><strong>Ringkas:</strong> Menyampaikan pesan inti tanpa informasi yang tidak perlu</li></ul><h3>Dashboard Risiko</h3><p>Dashboard visual memberikan gambaran cepat tentang profil risiko organisasi, termasuk heatmap, tren, dan status mitigasi.</p><div class="highlight-box"><div class="highlight-box-title">💡 Inti Pesan</div><p>Laporan risiko terbaik adalah yang membantu pengambil keputusan bertindak — bukan sekadar memenuhi kewajiban administratif.</p></div>`,
        realityCheck: { case: 'Tim risiko menyajikan laporan 50 halaman dengan detail teknis lengkap kepada Direksi. Hasilnya, Direksi kesulitan memahami isu kritis dan tidak ada keputusan yang diambil dalam rapat.', question: 'Bagaimana format laporan seharusnya disesuaikan untuk audiens Direksi?' },
        quiz: [
            { id: 'q15-1', question: 'Prinsip utama pelaporan risiko yang efektif adalah:', options: ['Selengkap mungkin', 'Tepat waktu, relevan, akurat, dan ringkas', 'Menggunakan bahasa teknis', 'Membuat laporan yang sama untuk semua audiens'], correct: 1 },
            { id: 'q15-2', question: 'Dashboard risiko berfungsi untuk:', options: ['Menggantikan analisis mendalam', 'Memberikan gambaran cepat tentang profil risiko', 'Hanya untuk keperluan audit', 'Menghilangkan kebutuhan laporan tertulis'], correct: 1 },
            { id: 'q15-3', question: 'Laporan untuk Direksi sebaiknya:', options: ['Detail teknis lengkap', 'Ringkasan eksekutif dengan visualisasi', 'Hanya angka tanpa narasi', 'Sama dengan laporan untuk operator'], correct: 1 },
            { id: 'q15-4', question: 'Laporan risiko harus tersedia:', options: ['Hanya di akhir tahun', 'Saat keputusan perlu diambil (tepat waktu)', 'Hanya saat diminta auditor', 'Setiap hari tanpa exceptions'], correct: 1 },
            { id: 'q15-5', question: 'Elemen penting dalam dashboard risiko meliputi:', options: ['Heatmap, tren, dan status mitigasi', 'Hanya daftar risiko', 'Foto kerusakan peralatan', 'Absensi karyawan'], correct: 0 }
        ],
        reflectionQuestion: 'Bagaimana kualitas pelaporan risiko di unit Anda saat ini? Aspek mana yang perlu ditingkatkan?',
    },
];
