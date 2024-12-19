import '../styles/globals.scss';
import Provider from '@/contexts';

export const metadata = {
    title: '불공',
    description: '페이지 설명',
    openGraph: {
        title: '페이지 제목',
        description: '페이지 설명',
        type: 'website',
        url: 'http://www.mysite.com/article/article1.html',
        images: [
            {
                url: 'http://www.mysite.com/article/article1_featured_image.jpg',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: '페이지 제목',
        description: '페이지 설명',
        images: ['http://www.mysite.com/article/article1.html'],
        creator: '사이트 명',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
                />
            </head>
            <body id="wrap">
                <Provider>
                    <div>{children}</div>
                </Provider>
            </body>
        </html>
    );
}
