// @ts-ignore
import sun from './sun.png';
// @ts-ignore
import cloud from './cloud.png'

export const getPicturePrecipitation = humidity => {
    return Math.random() > 0.5 ? sun : cloud
}