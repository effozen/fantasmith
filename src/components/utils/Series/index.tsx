import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const COLLAPSED_STANDARD = 8;

interface ICategory {
  name: string;
  link: string;
}

interface ICategoryProps {
  title: string;
  children: ICategory[];
  className?: string;
}

export const Series = ({ title, children, className }: ICategoryProps) => {
  // 컴포넌트의 확장 여부를 관리하는 state
  const [isOpen, setIsOpen] = useState<boolean>(true);
  // 콘텐츠 영역의 DOM 엘리먼트를 참조하기 위한 ref
  const contentRef = useRef<HTMLDivElement | null>(null);
  // 콘텐츠 영역의 실제 높이를 저장하는 state (애니메이션에 사용)
  const [height, setHeight] = useState<number>(0);

  const currentItem = useRef<number>();

  useEffect(() => {
    const currentLink = window.location.pathname;

    children.some((child, index) => {
      if (child.link === currentLink) {
        currentItem.current = index;
        return true;
      }
    });
  }, []);

  // isOpen 상태가 변경될 때마다, 콘텐츠 영역의 전체 높이(scrollHeight)를 계산합니다.
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  // 클릭 시 isOpen 상태를 토글합니다.
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.category}>
      {/* 헤더 영역: 클릭 시 토글 */}
      <div className={styles.header} onClick={toggleOpen}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.marker}>{isOpen ? '[닫기]' : '[열기]'}</div>
      </div>

      {/* 콘텐츠 영역: CSS 모듈을 사용하여 스타일링 및 애니메이션 효과 적용 */}
      <div
        ref={contentRef}
        className={clsx(styles.content, isOpen ? styles.open : '')}
        style={{ maxHeight: `${height}px` }}
      >
        <ol className={clsx(styles.ol)}>
          {children.map((child, index) => {
            return (
              <li
                key={child.link}
                className={clsx(styles.li, currentItem.current === index ? styles.strong : '')}
              >
                <a
                  href={child.link}
                  className={clsx(currentItem.current === index ? styles.strong : styles.a)}
                >
                  {child.name}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
