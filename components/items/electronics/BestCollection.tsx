import ItemCart2 from '@/components/cards/ItemCart2';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const fakeData = [
    {
        id: '1',
        name: 'Mid Century Modern T-Shirt',
        picture: '',
        version: '1.0',
        description: 'nice good awesome',
        price: 110,
        quantity: 20,
        published: true,
        categoryId: '1',
        category: {
            id: '1.1',
            name: 'Men-Cloths',
            description: '',
            image: '',
            published: true,
        },
    },
    {
        id: '2',
        name: 'Mid Century Modern T-Shirt',
        picture: '',
        version: '1.0',
        description: 'nice good awesome',
        price: 110,
        quantity: 20,
        published: true,
        categoryId: '2',
        category: {
            id: '2.1',
            name: 'Men-Cloths',
            description: '',
            image: '',
            published: true,
        },
    },
    {
        id: '3',
        name: 'Mid Century Modern T-Shirt',
        picture: '',
        version: '1.0',
        description: 'nice good awesome',
        price: 110,
        quantity: 20,
        published: true,
        categoryId: '3',
        category: {
            id: '3.1',
            name: 'Men-Cloths',
            description: '',
            image: '',
            published: true,
        },
    },
    {
        id: '4',
        name: 'Mid Century Modern T-Shirt',
        picture: '',
        version: '1.0',
        description: 'nice good awesome',
        price: 110,
        quantity: 20,
        published: true,
        categoryId: '4',
        category: {
            id: '4.1',
            name: 'Men-Cloths',
            description: '',
            image: '',
            published: true,
        },
    },
    {
        id: '5',
        name: 'Mid Century Modern T-Shirt',
        picture: '',
        version: '1.0',
        description: 'nice good awesome',
        price: 110,
        quantity: 20,
        published: true,
        categoryId: '4',
        category: {
            id: '4.1',
            name: 'Men-Cloths',
            description: '',
            image: '',
            published: true,
        },
    },
    {
        id: '6',
        name: 'Mid Century Modern T-Shirt',
        picture: '',
        version: '1.0',
        description: 'nice good awesome',
        price: 110,
        quantity: 20,
        published: true,
        categoryId: '4',
        category: {
            id: '4.1',
            name: 'Men-Cloths',
            description: '',
            image: '',
            published: true,
        },
    },
];

const BestCollection = () => {
    return (
        <div className="bg-white mt-20 pt-32 pb-28">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-row items-start justify-between w-full">
                    <h1 className="font-semibold text-3xl mb-10">
                        Our Best Collection
                    </h1>

                    <div className="flex flex-row items-center gap-2 w-[12%]">
                        <button className="w-1/2 h-12 bg-white border border-[#005D63] text-[#005D63] rounded-lg">
                            <WestIcon />
                        </button>

                        <button className="w-1/2 h-12 text-white bg-[#005D63] rounded-lg">
                            <EastIcon />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-10 mt-8">
                    {fakeData.map((product, idx) => (
                        <ItemCart2 key={idx} dataProduct={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestCollection;