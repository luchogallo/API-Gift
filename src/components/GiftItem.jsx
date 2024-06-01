
export const GiftItem = ({ gift }) => {

    const { images, title } = gift;

    return(
        <div className="card">
            <img src={ images.downsized_medium.url } alt={ title } />
            <h5>{ title }</h5>
        </div>
    );
}