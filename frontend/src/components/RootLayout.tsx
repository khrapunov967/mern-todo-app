
const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <section className="w-full max-w-[1440px] my-0 mx-auto">
            {children}
        </section>
    );
};

export default RootLayout;