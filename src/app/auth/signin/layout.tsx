'use client'

export default function AuthLayout({children} : {children: React.ReactNode}) {
    return(
        <div className=" items-center justify-center h-[708px] w-full" >
            <div className="h-[678px] w-[1100px] " style={{ backgroundImage: "url('/bg.jpg')"}}>
            <main >{children}</main>
            </div>
        </div>
    );
}