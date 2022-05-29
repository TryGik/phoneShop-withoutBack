import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
    <ContentLoader
        className="content__item"
        speed={2}
        width={352.66}
        height={600}
        viewBox="0 0 352.66 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="147" y="168" rx="0" ry="0" width="1" height="1" />
        <rect x="14" y="20" rx="0" ry="0" width="308" height="374" />
        <rect x="46" y="420" rx="0" ry="0" width="231" height="51" />
        <rect x="20" y="557" rx="0" ry="0" width="116" height="44" />
        <rect x="178" y="559" rx="0" ry="0" width="112" height="52" />
    </ContentLoader>
)

export default MyLoader;

