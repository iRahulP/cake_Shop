import AvailableCakes from './AvailableCakes';
import CakesSummary from './CakesSummary';

const Shop = () => {
    return (
        <div>
            <CakesSummary />
            <div style={{display: "inline-block"}}>
                <AvailableCakes />
            </div>
        </div>
    )
}

export default Shop
