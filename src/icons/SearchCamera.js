import * as React from 'react'

function SvgSearchCamera(props) {
  return (
    <svg
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      {...props}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#12c2e9', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#c471ed', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f64f59', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad1)"
        // fill="currentColor"
        d="M38.988 11.031c-2.462 0-4.998 2.015-4.998 4.998v3h-1c-5.103 0-8.996 4.626-8.996 9.995v18.18C13.836 48.67 5.969 57.457 5.969 68.008c0 11.57 9.453 21.023 21.024 21.023 11.24 0 20.474-8.908 20.992-20.023h36.987c5.103 0 8.997-4.627 8.997-9.996V29.024c0-5.369-3.894-9.996-8.997-9.996H51.984V16.03c0-2.983-2.536-4.998-4.999-4.998h-7.997zm0 3.999h7.997c.445 0 1 .185 1 1v2.998H37.99V16.03c0-.814.554-1 1-1zm-5.998 7.996h51.982c2.65 0 4.998 2.507 4.998 5.998v12.995H71.79c-.97-6.207-6.337-10.996-12.809-10.996-6.471 0-11.838 4.789-12.808 10.996h-18.18V29.024c0-3.491 2.347-5.998 4.997-5.998zm46.984 1c-2.735 0-4.999 2.264-4.999 4.998 0 2.734 2.264 4.998 4.999 4.998h3.998c2.735 0 4.999-2.264 4.999-4.998 0-2.734-2.264-4.998-4.999-4.998h-3.998zm0 3.998h3.998c.589 0 1 .412 1 1 0 .588-.411 1-1 1h-3.998c-.589 0-1-.412-1-1 0-.588.411-1 1-1zM58.98 35.022a8.966 8.966 0 018.997 8.996 8.966 8.966 0 01-8.997 8.996 8.966 8.966 0 01-8.997-8.996 8.966 8.966 0 018.997-8.996zM27.992 46.017h18.181c.97 6.207 6.337 10.996 12.808 10.996 6.472 0 11.839-4.789 12.808-10.996H89.97v12.995c0 3.491-2.348 5.998-4.998 5.998H47.798c-1.419-9.84-9.698-17.522-19.806-17.993v-1zm-1 5.03a16.91 16.91 0 0116.963 16.961A16.91 16.91 0 0126.993 84.97 16.91 16.91 0 0110.03 68.008a16.91 16.91 0 0116.963-16.962zm-1.999 5.966c-4.945 0-8.997 4.051-8.997 8.996s4.052 8.997 8.997 8.997a8.91 8.91 0 004.78-1.406l4.81 4.81a2 2 0 102.812-2.842l-4.78-4.78a8.936 8.936 0 001.375-4.779c0-4.945-4.052-8.996-8.997-8.996zm0 3.998a4.968 4.968 0 014.998 4.998 4.968 4.968 0 01-4.998 4.998 4.968 4.968 0 01-4.998-4.998 4.968 4.968 0 014.998-4.998z"
      />
    </svg>
  )
}

export default SvgSearchCamera