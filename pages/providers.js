import Map from '../components/Map';

const providers = [
    {
        title: "Home",
        address: "No. 145, Jiafeng 7th Street, Zhubei City, Hsinchu County, 302",
        latLng: { lat: 24.810296, lng: 121.031534 }
    },
    {
        title: "New Home",
        address: "No. 230, Aikou 1st Street, Zhubei City, Hsinchu County, 302",
        latLng: { lat: 24.803932, lng: 121.042547 }
    },
    {
        title: "Hold Mind Coffee",
        address: "No. 62, Section 1, Jiafengliu Road, Zhubei City, Hsinchu County, 302",
        latLng: { lat: 24.812560, lng: 121.030780 }
    },
    {
        title: "Duan Chun Zhen",
        address: "No. 95, Section 1, Jiafengliu Road, Zhubei City, Hsinchu County, 302",
        latLng: { lat: 24.811950, lng: 121.030670 }
    },
    {
        title: "SUPIN Aisukurimu",
        address: "No. 93, Section 1, Jiafengliu Road, Zhubei City, Hsinchu County, 302",
        latLng: { lat: 24.812112, lng: 121.030686 }
    },
    {
        title: "McDonald's Wenxing",
        address: "No. 350, Section 1, Wenxing Road, Zhubei City, Hsinchu County, 302",
        latLng: { lat: 24.808880, lng: 121.031270 }
    },
    {
        title: "Louisa Coffee Wenxing",
        address: "No. 1, Section 2, Wenxing Road, Zhubei City, Hsinchu County, 302",
        latLng: { lat: 24.808421, lng: 121.032974 }
    },
    {
        title: "Shine-Mood Waffles",
        address: "No. 73, Section 2, Liujiayi Road, Zhubei City, Hsinchu County, 302",
        latLng: { lat: 24.806268, lng: 121.034565 }
    },
    {
        title: "Mercy Cafe",
        address: "No. 82, Section 2, Fuxingsan Road, Zhubei City, Hsinchu County, 302",
        latLng: { lat: 24.810176799999997, lng: 121.03158850000001 }
    },
    {
        title: "HEISEI Yakiniku",
        address: "No. 332, Section 2, Wenxing Road, Zhubei City, Hsinchu County, 302",
        latLng: { lat: 24.805270, lng: 121.042162 }
    },
]

export default function Providers () {
    return (
        <Map providers={ providers } />
    );
}