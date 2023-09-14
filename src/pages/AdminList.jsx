import { Link } from 'react-router-dom';

export function AdminList() {
    return (
        <>
            <h1>Admin list</h1>
            <Link to="/admin/myra">Myra-Grace</Link>
            <Link to="/admin/marc-lovem">Marc Lovem</Link>
        </>
    );
}