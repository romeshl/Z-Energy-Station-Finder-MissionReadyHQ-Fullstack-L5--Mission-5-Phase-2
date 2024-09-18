import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="h-[200px] bg-orange-300 flex justify-center items-center">
            <ul style={{ display: 'flex', listStyleType: 'none', gap: '1rem', padding: 0 }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/find-a-station">Find a Station</Link>
                </li>
            </ul>
        </nav>
    );
}
