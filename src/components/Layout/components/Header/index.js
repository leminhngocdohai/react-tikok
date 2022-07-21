import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <>
            <header className={cx('header-wrapper')}>
                <div className={cx('container')}>
                    <h1 className={cx('heading')}>Logo</h1>
                    <h1 className={cx('heading')}>Search</h1>
                </div>
            </header>
        </>
    );
}

export default Header;
