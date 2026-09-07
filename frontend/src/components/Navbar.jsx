"use client";
import Image from 'next/image'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav () {

    const pathname = usePathname();
    const isActive = (path) => path === pathname;

    return (
        <nav className="navbar">
            <div className="logo">
                <Image
                src="/assets/logo-artemisa.png"
                width={180}
                height={100}
                alt="Logo de estética Artemisa"
                className="logo-img"
              />
            </div>
            <ul>
                <li><Link className={`nav-link ${isActive("/") ? "activo" : ""}`} href="/">Inicio</Link></li>
                <li><Link className={`nav-link ${isActive("/servicios") ? "activo" : ""}`} href="/servicios">Servicios</Link></li>
                <li><Link className={`nav-link ${isActive("/contacto") ? "activo" : ""}`} href="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}