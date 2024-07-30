import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authentication',
    description: 'Generated by create next app',
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-black overflow-y-hidden">
            {children}
        </div>
    );
};

export default AuthLayout;
