import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="PT. Trans Nusa Services Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gray-800">
              PT. Trans Nusa Services
            </span>
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Beranda
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-600 hover:text-blue-600"
            >
              Terms of Service
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Privacy Policy
        </h1>
        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-gray-600 mb-6">
            <strong>Terakhir diperbarui:</strong> 1 September 2025
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. Pendahuluan
          </h2>
          <p className="text-gray-600 mb-4">
            PT. Trans Nusa Services (&quot;kami&quot;, &quot;kita&quot;, atau
            &quot;perusahaan&quot;) berkomitmen untuk melindungi privasi Anda.
            Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
            menggunakan, dan melindungi informasi pribadi Anda saat menggunakan
            layanan transportasi dan logistik kami, termasuk layanan dari anak
            perusahaan kami (Drive-in dan Sumatrans).
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. Informasi yang Kami Kumpulkan
          </h2>
          <p className="text-gray-600 mb-4">
            Kami mengumpulkan informasi berikut:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Nama lengkap</li>
            <li>Nomor telepon/WhatsApp</li>
            <li>Alamat email</li>
            <li>Alamat tempat tinggal</li>
            <li>Tanggal lahir</li>
            <li>Data jadwal latihan (Drive-in)</li>
            <li>Data pengiriman dan logistik (Sumatrans)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            3. Penggunaan Informasi
          </h2>
          <p className="text-gray-600 mb-4">
            Informasi yang dikumpulkan digunakan untuk:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>
              Mengelola pendaftaran dan jadwal kursus mengemudi (Drive-in)
            </li>
            <li>Mengelola pengiriman dan tracking logistik (Sumatrans)</li>
            <li>Mengirim notifikasi terkait layanan via WhatsApp</li>
            <li>Mengirim pengingat pembayaran</li>
            <li>Memberikan informasi tentang layanan kami</li>
            <li>Meningkatkan kualitas layanan</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            4. Perlindungan Data
          </h2>
          <p className="text-gray-600 mb-4">
            Kami mengimplementasikan langkah-langkah keamanan yang sesuai untuk
            melindungi informasi pribadi Anda dari akses tidak sah, pengubahan,
            pengungkapan, atau penghancuran.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            5. Berbagi Informasi
          </h2>
          <p className="text-gray-600 mb-4">
            Kami tidak menjual, memperdagangkan, atau mentransfer informasi
            pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali
            jika diwajibkan oleh hukum.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            6. Hak Anda
          </h2>
          <p className="text-gray-600 mb-4">Anda memiliki hak untuk:</p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Mengakses data pribadi Anda</li>
            <li>Meminta koreksi data yang tidak akurat</li>
            <li>Meminta penghapusan data Anda</li>
            <li>Menolak pemrosesan data Anda</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            7. Kontak
          </h2>
          <p className="text-gray-600 mb-4">
            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan
            hubungi kami di:
          </p>
          <ul className="list-none text-gray-600 mb-4 space-y-2">
            <li>
              <strong>WhatsApp:</strong> +62 851-2620-2140
            </li>
            <li>
              <strong>Email:</strong> info@transnusaservices.com
            </li>
          </ul>
        </div>
      </main>

      <footer className="bg-gray-800 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-400 text-sm">
          © 2025 PT. Trans Nusa Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
