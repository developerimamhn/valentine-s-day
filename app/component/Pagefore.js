import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import image14 from './image/image14.png';
import image15 from './image/image15.png';
import image16 from './image/image16.png';
import image7 from './image/image7.png';
gsap.registerPlugin(ScrollTrigger);

const Pagefore = () => {
    useEffect(() => {
        gsap.from(".section-3", {
          x: -300,
          opacity: 0,
          duration: 3,
          scrollTrigger: {
            trigger: ".section-3",
            start: "top 80%",
            end: "top 50%",
            scrub: 2,
          },
        });
      }, []);

    return (
        <div className='relative overflow-hidden '>
            <Image className='w-full absolute top-0 left-0 h-full object-cover z-[0] select-none pointer-event-none' src={image7} alt=''/>
            <svg className='absolute w-full' viewBox="0 0 1920 1542" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.1392 339.506C-24.4608 332.206 -36.3608 314.406 -27.0608 300.106C-22.5608 293.206 -14.1608 293.506 -8.36076 294.706C-4.86076 295.406 -2.26076 296.506 -2.26076 296.506C-2.26076 296.506 0.839237 277.706 14.1392 277.606C31.2392 277.606 39.6392 297.206 21.1392 339.506Z" fill="#E03835"/>
<path d="M21.1392 339.506C-24.4608 332.206 -36.3608 314.406 -27.0608 300.106C-22.5608 293.206 -14.1608 293.506 -8.36076 294.706C-8.96076 294.706 -23.7608 295.606 -21.4608 311.406C-18.5608 330.706 20.0392 339.306 21.1392 339.506Z" fill="#CD2A25"/>
<path d="M4.13867 286.907C4.13867 286.907 10.4387 277.307 20.8387 282.607C31.3387 288.007 27.3387 309.407 27.3387 309.407C27.3387 309.407 27.6387 293.707 19.2387 287.407C10.7387 281.107 4.13867 286.907 4.13867 286.907Z" fill="white"/>
<path d="M21.1392 339.506C39.6392 297.206 31.2392 277.606 14.1392 277.606C0.839236 277.706 -2.26076 296.506 -2.26076 296.506C-2.26076 296.506 -19.7608 288.906 -27.0608 300.106C-36.3608 314.406 -24.4608 332.206 21.1392 339.506Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M264.84 35.0066C240.74 30.2066 234.84 20.5066 240.04 13.1066C242.34 9.80662 246.24 9.80663 249.24 10.4066C251.54 10.9066 253.34 11.7066 253.34 11.7066C253.34 11.7066 255.34 1.70662 262.44 2.00662C271.54 2.30662 275.64 12.9066 264.84 35.0066Z" fill="#E03835"/>
<path d="M264.84 35.0067C240.74 30.2067 234.84 20.5067 240.04 13.1067C242.34 9.80666 246.24 9.80667 249.24 10.4067C248.74 10.4067 242.94 11.1067 242.54 18.3067C241.84 28.6067 263.64 34.7067 264.84 35.0067Z" fill="#CD2A25"/>
<path d="M256.939 7.00656C256.939 7.00656 260.339 2.10657 265.739 5.10657C271.039 8.10657 268.539 19.2066 268.539 19.2066C268.539 19.2066 269.039 11.0066 264.739 7.50656C260.439 4.00656 256.939 7.00656 256.939 7.00656Z" fill="white"/>
<path d="M264.84 35.0066C275.64 12.9066 271.54 2.30662 262.44 2.00662C255.34 1.70662 253.34 11.7066 253.34 11.7066C253.34 11.7066 244.14 7.30662 240.04 13.1066C234.84 20.5066 240.74 30.2066 264.84 35.0066Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M129.64 174.407C129.64 174.407 129.64 174.373 129.64 174.307C112.24 137.807 119.04 120.307 134.14 119.907C140.64 119.707 144.54 124.807 146.74 129.307C146.74 129.373 146.74 129.407 146.74 129.407C148.44 132.907 149.04 136.007 149.04 136.007C149.04 136.007 164.24 128.807 170.94 138.507C179.44 150.807 169.54 166.707 129.64 174.407Z" fill="#E03835"/>
<path d="M129.64 174.307C112.24 137.807 119.04 120.307 134.14 119.907C140.64 119.707 144.54 124.807 146.74 129.307C146.14 128.707 139.54 121.807 129.64 128.307C115.44 137.607 128.94 172.407 129.64 174.307Z" fill="#CD2A25"/>
<path d="M158.84 136.106C158.84 136.106 168.74 135.806 170.14 145.906C171.44 155.906 154.34 163.606 154.34 163.606C154.34 163.606 165.54 156.106 165.94 147.006C166.24 137.906 158.84 136.106 158.84 136.106Z" fill="white"/>
<path d="M129.64 174.406C169.54 166.706 179.44 150.806 170.94 138.506C164.24 128.806 149.04 136.006 149.04 136.006C149.04 136.006 145.84 119.606 134.14 119.906C119.04 120.306 112.24 137.806 129.64 174.406Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M105.039 449.606C105.039 449.606 105.039 449.573 105.039 449.506C81.3391 419.706 83.9391 402.206 97.6391 398.706C104.139 397.006 109.139 401.806 111.939 405.806C113.739 408.206 114.639 410.306 114.639 410.306C114.639 410.306 127.039 400.506 135.239 407.906C145.639 417.406 139.839 434.106 105.039 449.606Z" fill="#E03835"/>
<path d="M105.039 449.506C81.3391 419.706 83.9391 402.206 97.6391 398.706C104.139 397.006 109.139 401.806 111.939 405.806C111.639 405.506 102.039 397.706 94.6391 408.706C85.7391 422.106 104.439 448.806 105.039 449.506Z" fill="#CD2A25"/>
<path d="M123.939 408.007C123.939 408.007 133.139 405.607 136.539 414.707C139.939 423.807 125.539 434.707 125.539 434.707C125.539 434.707 134.539 425.307 132.839 416.707C131.239 408.107 123.939 408.007 123.939 408.007Z" fill="white"/>
<path d="M105.039 449.607C139.839 434.107 145.639 417.407 135.239 407.907C127.039 400.507 114.639 410.307 114.639 410.307C114.639 410.307 108.239 395.907 97.6391 398.707C83.9391 402.207 81.3391 419.707 105.039 449.607Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.1395 68.1064C-1.96048 63.2064 -7.96048 53.6064 -2.66048 46.1064C-0.360479 42.9064 3.53952 42.9064 6.43952 43.4064C6.50619 43.4064 6.53952 43.4064 6.53952 43.4064C8.83952 43.9064 10.5395 44.8064 10.5395 44.8064C10.5395 44.8064 12.5395 34.8064 19.6395 35.0064C28.7395 35.4064 32.8395 46.0064 22.1395 68.1064Z" fill="#E03835"/>
<path d="M22.1395 68.1068C-1.96048 63.2068 -7.96048 53.6068 -2.66048 46.1068C-0.360479 42.9068 3.53952 42.9067 6.43952 43.4067C5.93952 43.5067 0.239522 44.2068 -0.260478 51.3068C-0.860478 61.6068 20.9395 67.7068 22.1395 68.1068Z" fill="#CD2A25"/>
<path d="M14.1387 40.0066C14.1387 40.0066 17.6387 35.1066 22.9387 38.1066C28.3387 41.1066 25.8387 52.2066 25.8387 52.2066C25.8387 52.2066 26.3387 44.0066 22.0387 40.6066C17.7387 37.1066 14.1387 40.0066 14.1387 40.0066Z" fill="white"/>
<path d="M22.1395 68.1064C32.8395 46.0064 28.7395 35.4064 19.6395 35.0064C12.5395 34.8064 10.5395 44.8064 10.5395 44.8064C10.5395 44.8064 1.43952 40.3064 -2.66048 46.1064C-7.96048 53.6064 -1.96048 63.3064 22.1395 68.1064Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1899.16 667.506C1944.76 660.206 1956.66 642.406 1947.36 628.106C1942.86 621.206 1934.46 621.506 1928.66 622.706C1925.16 623.406 1922.56 624.506 1922.56 624.506C1922.56 624.506 1919.46 605.706 1906.16 605.606C1889.06 605.606 1880.66 625.206 1899.16 667.506Z" fill="#E03835"/>
<path d="M1899.16 667.506C1944.76 660.206 1956.66 642.406 1947.36 628.106C1942.86 621.206 1934.46 621.506 1928.66 622.706C1929.26 622.706 1944.06 623.606 1941.76 639.406C1938.86 658.706 1900.26 667.306 1899.16 667.506Z" fill="#CD2A25"/>
<path d="M1916.16 614.907C1916.16 614.907 1909.86 605.307 1899.46 610.607C1888.96 616.007 1892.96 637.407 1892.96 637.407C1892.96 637.407 1892.66 621.707 1901.06 615.407C1909.56 609.107 1916.16 614.907 1916.16 614.907Z" fill="white"/>
<path d="M1899.16 667.506C1880.66 625.206 1889.06 605.606 1906.16 605.606C1919.46 605.706 1922.56 624.506 1922.56 624.506C1922.56 624.506 1940.06 616.906 1947.36 628.106C1956.66 642.406 1944.76 660.206 1899.16 667.506Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1655.46 363.007C1679.56 358.207 1685.46 348.507 1680.26 341.107C1677.96 337.807 1674.06 337.807 1671.06 338.407C1668.76 338.907 1666.96 339.707 1666.96 339.707C1666.96 339.707 1664.96 329.707 1657.86 330.007C1648.76 330.307 1644.66 340.907 1655.46 363.007Z" fill="#E03835"/>
<path d="M1655.46 363.007C1679.56 358.207 1685.46 348.507 1680.26 341.107C1677.96 337.807 1674.06 337.807 1671.06 338.407C1671.56 338.407 1677.36 339.107 1677.76 346.307C1678.46 356.607 1656.66 362.707 1655.46 363.007Z" fill="#CD2A25"/>
<path d="M1663.36 335.007C1663.36 335.007 1659.96 330.107 1654.56 333.107C1649.26 336.107 1651.76 347.207 1651.76 347.207C1651.76 347.207 1651.26 339.007 1655.56 335.507C1659.86 332.007 1663.36 335.007 1663.36 335.007Z" fill="white"/>
<path d="M1655.46 363.007C1644.66 340.907 1648.76 330.307 1657.86 330.007C1664.96 329.707 1666.96 339.707 1666.96 339.707C1666.96 339.707 1676.16 335.307 1680.26 341.107C1685.46 348.507 1679.56 358.207 1655.46 363.007Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1790.66 502.407C1790.66 502.407 1790.66 502.373 1790.66 502.307C1808.06 465.807 1801.26 448.307 1786.16 447.907C1779.66 447.707 1775.76 452.807 1773.56 457.307C1773.56 457.373 1773.56 457.407 1773.56 457.407C1771.86 460.907 1771.26 464.007 1771.26 464.007C1771.26 464.007 1756.06 456.807 1749.36 466.507C1740.86 478.807 1750.76 494.707 1790.66 502.407Z" fill="#E03835"/>
<path d="M1790.66 502.307C1808.06 465.807 1801.26 448.307 1786.16 447.907C1779.66 447.707 1775.76 452.807 1773.56 457.307C1774.16 456.707 1780.76 449.807 1790.66 456.307C1804.86 465.607 1791.36 500.407 1790.66 502.307Z" fill="#CD2A25"/>
<path d="M1761.46 464.106C1761.46 464.106 1751.56 463.806 1750.16 473.906C1748.86 483.906 1765.96 491.606 1765.96 491.606C1765.96 491.606 1754.76 484.106 1754.36 475.006C1754.06 465.906 1761.46 464.106 1761.46 464.106Z" fill="white"/>
<path d="M1790.66 502.406C1750.76 494.706 1740.86 478.806 1749.36 466.506C1756.06 456.806 1771.26 464.006 1771.26 464.006C1771.26 464.006 1774.46 447.606 1786.16 447.906C1801.26 448.306 1808.06 465.806 1790.66 502.406Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1815.26 777.606C1815.26 777.606 1815.26 777.573 1815.26 777.506C1838.96 747.706 1836.36 730.206 1822.66 726.706C1816.16 725.006 1811.16 729.806 1808.36 733.806C1806.56 736.206 1805.66 738.306 1805.66 738.306C1805.66 738.306 1793.26 728.506 1785.06 735.906C1774.66 745.406 1780.46 762.106 1815.26 777.606Z" fill="#E03835"/>
<path d="M1815.26 777.506C1838.96 747.706 1836.36 730.206 1822.66 726.706C1816.16 725.006 1811.16 729.806 1808.36 733.806C1808.66 733.506 1818.26 725.706 1825.66 736.706C1834.56 750.106 1815.86 776.806 1815.26 777.506Z" fill="#CD2A25"/>
<path d="M1796.36 736.007C1796.36 736.007 1787.16 733.607 1783.76 742.707C1780.36 751.807 1794.76 762.707 1794.76 762.707C1794.76 762.707 1785.76 753.307 1787.46 744.707C1789.06 736.107 1796.36 736.007 1796.36 736.007Z" fill="white"/>
<path d="M1815.26 777.607C1780.46 762.107 1774.66 745.407 1785.06 735.907C1793.26 728.507 1805.66 738.307 1805.66 738.307C1805.66 738.307 1812.06 723.907 1822.66 726.707C1836.36 730.207 1838.96 747.707 1815.26 777.607Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1898.16 396.106C1922.26 391.206 1928.26 381.606 1922.96 374.106C1920.66 370.906 1916.76 370.906 1913.86 371.406C1913.79 371.406 1913.76 371.406 1913.76 371.406C1911.46 371.906 1909.76 372.806 1909.76 372.806C1909.76 372.806 1907.76 362.806 1900.66 363.006C1891.56 363.406 1887.46 374.006 1898.16 396.106Z" fill="#E03835"/>
<path d="M1898.16 396.107C1922.26 391.207 1928.26 381.607 1922.96 374.107C1920.66 370.907 1916.76 370.907 1913.86 371.407C1914.36 371.507 1920.06 372.207 1920.56 379.307C1921.16 389.607 1899.36 395.707 1898.16 396.107Z" fill="#CD2A25"/>
<path d="M1906.16 368.007C1906.16 368.007 1902.66 363.107 1897.36 366.107C1891.96 369.107 1894.46 380.207 1894.46 380.207C1894.46 380.207 1893.96 372.007 1898.26 368.607C1902.56 365.107 1906.16 368.007 1906.16 368.007Z" fill="white"/>
<path d="M1898.16 396.106C1887.46 374.006 1891.56 363.406 1900.66 363.006C1907.76 362.806 1909.76 372.806 1909.76 372.806C1909.76 372.806 1918.86 368.306 1922.96 374.106C1928.26 381.606 1922.26 391.306 1898.16 396.106Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1597.46 1351.01C1621.56 1346.21 1627.46 1336.51 1622.26 1329.11C1619.96 1325.81 1616.06 1325.81 1613.06 1326.41C1610.76 1326.91 1608.96 1327.71 1608.96 1327.71C1608.96 1327.71 1606.96 1317.71 1599.86 1318.01C1590.76 1318.31 1586.66 1328.91 1597.46 1351.01Z" fill="#E03835"/>
<path d="M1597.46 1351.01C1621.56 1346.21 1627.46 1336.51 1622.26 1329.11C1619.96 1325.81 1616.06 1325.81 1613.06 1326.41C1613.56 1326.41 1619.36 1327.11 1619.76 1334.31C1620.46 1344.61 1598.66 1350.71 1597.46 1351.01Z" fill="#CD2A25"/>
<path d="M1605.36 1323.01C1605.36 1323.01 1601.96 1318.11 1596.56 1321.11C1591.26 1324.11 1593.76 1335.21 1593.76 1335.21C1593.76 1335.21 1593.26 1327.01 1597.56 1323.51C1601.86 1320.01 1605.36 1323.01 1605.36 1323.01Z" fill="white"/>
<path d="M1597.46 1351.01C1586.66 1328.91 1590.76 1318.31 1599.86 1318.01C1606.96 1317.71 1608.96 1327.71 1608.96 1327.71C1608.96 1327.71 1618.16 1323.31 1622.26 1329.11C1627.46 1336.51 1621.56 1346.21 1597.46 1351.01Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1732.66 1490.41C1732.66 1490.41 1732.66 1490.37 1732.66 1490.31C1750.06 1453.81 1743.26 1436.31 1728.16 1435.91C1721.66 1435.71 1717.76 1440.81 1715.56 1445.31C1715.56 1445.37 1715.56 1445.41 1715.56 1445.41C1713.86 1448.91 1713.26 1452.01 1713.26 1452.01C1713.26 1452.01 1698.06 1444.81 1691.36 1454.51C1682.86 1466.81 1692.76 1482.71 1732.66 1490.41Z" fill="#E03835"/>
<path d="M1732.66 1490.31C1750.06 1453.81 1743.26 1436.31 1728.16 1435.91C1721.66 1435.71 1717.76 1440.81 1715.56 1445.31C1716.16 1444.71 1722.76 1437.81 1732.66 1444.31C1746.86 1453.61 1733.36 1488.41 1732.66 1490.31Z" fill="#CD2A25"/>
<path d="M1703.46 1452.11C1703.46 1452.11 1693.56 1451.81 1692.16 1461.91C1690.86 1471.91 1707.96 1479.61 1707.96 1479.61C1707.96 1479.61 1696.76 1472.11 1696.36 1463.01C1696.06 1453.91 1703.46 1452.11 1703.46 1452.11Z" fill="white"/>
<path d="M1732.66 1490.41C1692.76 1482.71 1682.86 1466.81 1691.36 1454.51C1698.06 1444.81 1713.26 1452.01 1713.26 1452.01C1713.26 1452.01 1716.46 1435.61 1728.16 1435.91C1743.26 1436.31 1750.06 1453.81 1732.66 1490.41Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1840.16 1384.11C1864.26 1379.21 1870.26 1369.61 1864.96 1362.11C1862.66 1358.91 1858.76 1358.91 1855.86 1359.41C1855.79 1359.41 1855.76 1359.41 1855.76 1359.41C1853.46 1359.91 1851.76 1360.81 1851.76 1360.81C1851.76 1360.81 1849.76 1350.81 1842.66 1351.01C1833.56 1351.41 1829.46 1362.01 1840.16 1384.11Z" fill="#E03835"/>
<path d="M1840.16 1384.11C1864.26 1379.21 1870.26 1369.61 1864.96 1362.11C1862.66 1358.91 1858.76 1358.91 1855.86 1359.41C1856.36 1359.51 1862.06 1360.21 1862.56 1367.31C1863.16 1377.61 1841.36 1383.71 1840.16 1384.11Z" fill="#CD2A25"/>
<path d="M1848.16 1356.01C1848.16 1356.01 1844.66 1351.11 1839.36 1354.11C1833.96 1357.11 1836.46 1368.21 1836.46 1368.21C1836.46 1368.21 1835.96 1360.01 1840.26 1356.61C1844.56 1353.11 1848.16 1356.01 1848.16 1356.01Z" fill="white"/>
<path d="M1840.16 1384.11C1829.46 1362.01 1833.56 1351.41 1842.66 1351.01C1849.76 1350.81 1851.76 1360.81 1851.76 1360.81C1851.76 1360.81 1860.86 1356.31 1864.96 1362.11C1870.26 1369.61 1864.26 1379.31 1840.16 1384.11Z" stroke="#3D0D0D" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className=' container mx-auto py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[100px]'>
                <h2 className='roadmapsection text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[60px] text-center section-3'>Roadmap</h2>
                <div className='flex items-center md:flex-row flex-col '>
                    <div className='flex-1 section-3'>
                        <Image className='w-3/5 -mb-[75px]' src={image14} alt=''/>
                        <div className='relative'>
                            <svg className='w-full' viewBox="0 0 752 341" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="36" width="752" height="305" rx="32" fill="#E03835"/>
                            <circle cx="664.806" cy="7.80612" r="7.30612" fill="#982220" stroke="white"/>
                            <circle cx="664.806" cy="62.9082" r="7.30612" fill="#982220" stroke="white"/>
                            <line x1="664.348" y1="15.6123" x2="664.348" y2="56.0205" stroke="#E3AEAD" stroke-width="1.83673"/>
                            <circle cx="694.193" cy="7.80612" r="7.30612" fill="#982220" stroke="white"/>
                            <circle cx="694.193" cy="62.9082" r="7.30612" fill="#982220" stroke="white"/>
                            <line x1="693.731" y1="15.6123" x2="693.731" y2="56.0205" stroke="#E3AEAD" stroke-width="1.83673"/>
                            </svg>
                            <div className='absolute top-[58%] transform -translate-y-1/2 px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]'>
                                <h2 className='fallinglovingsection text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]'>Falling in Love</h2>
                                <ul className='pl-[14px] sm:pl-[15px] md:pl-[16px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[28px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[27px]'>
                                    <li className='list-disc memeconsec text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]'>Meme Coin Concept & Branding</li>
                                    <li className='list-disc memeconsec text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]'>Website & Social Launch</li>
                                    <li className='list-disc memeconsec text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]'>Community Building</li>
                                </ul>
                            </div>
                        </div>  



                        <Image className='w-3/5 -mb-[40px] ml-[30px] pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[86px]' src={image15} alt=''/>
                        <div className='relative'>
                            <svg className='w-full' viewBox="0 0 752 341" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="36" width="752" height="305" rx="32" fill="#E03835"/>
                            <circle cx="664.806" cy="7.80612" r="7.30612" fill="#982220" stroke="white"/>
                            <circle cx="664.806" cy="62.9082" r="7.30612" fill="#982220" stroke="white"/>
                            <line x1="664.348" y1="15.6123" x2="664.348" y2="56.0205" stroke="#E3AEAD" stroke-width="1.83673"/>
                            <circle cx="694.193" cy="7.80612" r="7.30612" fill="#982220" stroke="white"/>
                            <circle cx="694.193" cy="62.9082" r="7.30612" fill="#982220" stroke="white"/>
                            <line x1="693.731" y1="15.6123" x2="693.731" y2="56.0205" stroke="#E3AEAD" stroke-width="1.83673"/>
                            </svg>
                            <div className='absolute top-[58%] transform -translate-y-1/2 px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]'>
                                <h2 className='fallinglovingsection text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]'>Relationship Goals</h2>
                                <ul className='pl-[14px] sm:pl-[15px] md:pl-[16px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[28px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[27px]'>
                                    <li className='list-disc memeconsec text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]'>Major Exchange Listings</li>
                                    <li className='list-disc memeconsec text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]'>NFT Collection</li>
                                    <li className='list-disc memeconsec text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]'>Charity Love Fund</li>
                                </ul>
                            </div>
                        </div> 

                    </div>
                    <div className='flex-1 section-3'>
                    <Image className='w-3/6 -mb-[40px] ml-[25%] pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[86px]' src={image16} alt=''/>
                        <div className='relative'>
                            <svg className='w-full' viewBox="0 0 752 341" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="36" width="752" height="305" rx="32" fill="#E03835"/>
                            <circle cx="664.806" cy="7.80612" r="7.30612" fill="#982220" stroke="white"/>
                            <circle cx="664.806" cy="62.9082" r="7.30612" fill="#982220" stroke="white"/>
                            <line x1="664.348" y1="15.6123" x2="664.348" y2="56.0205" stroke="#E3AEAD" stroke-width="1.83673"/>
                            <circle cx="694.193" cy="7.80612" r="7.30612" fill="#982220" stroke="white"/>
                            <circle cx="694.193" cy="62.9082" r="7.30612" fill="#982220" stroke="white"/>
                            <line x1="693.731" y1="15.6123" x2="693.731" y2="56.0205" stroke="#E3AEAD" stroke-width="1.83673"/>
                            </svg>
                            <div className='absolute top-[58%] transform -translate-y-1/2 px-[14px] sm:px-[15px] md:px-[16px] lg:px-[20px] xl:px-[24px] 2xl:px-[32px]'>
                                <h2 className='fallinglovingsection text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]'>First Date</h2>
                                <ul className='pl-[14px] sm:pl-[15px] md:pl-[16px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[28px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[27px]'>
                                    <li className='list-disc memeconsec text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]'>Presale & Listings</li>
                                    <li className='list-disc memeconsec text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]'>1,000+ Holders</li>
                                    <li className='list-disc memeconsec text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px]'>Influencer Partnerships</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
// const styles = {
// //     section: {
// //       height: "100vh",
// //     },
// //   };

export default Pagefore;