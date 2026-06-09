'use client'

export default function AuthLayout({children} : {children: React.ReactNode}) {
    return(
        <div className=" items-center justify-center h-full w-full" >
            <div className="h-full w-full " style={{ backgroundImage: "url('/bg.jpg')", backgroundSize: 'cover' }}>
            <main >{children}</main>
            </div>
        </div>
    );
}