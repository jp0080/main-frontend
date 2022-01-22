import React, { memo } from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

function Logo(props: SvgProps) {
  return (
    <Svg width={159} height={58} fill="none" {...props}>
      <Path
        d="M30.334 21.198c.077-.497.156-.912.204-1.329.118-.996.34-1.242 1.331-1.257 1.412-.024 2.828 0 4.246 0 2.215 0 4.43 0 6.645.026.455 0 .91.074 1.477.124-.098.904-.168 1.75-.284 2.593-.586 4.242-1.178 8.483-1.778 12.721-.282 2.014-.553 4.03-.863 6.037a5.04 5.04 0 0 0 .267 2.634c.297.775.61 1.01 1.44 1.03.988.026 1.198.202 1.074 1.112a946.47 946.47 0 0 1-1.512 10.705c-.164 1.112-.5 1.378-1.572 1.421-2.03.078-4.049.119-6.063-.27-2.857-.556-5.288-1.766-6.985-4.389-.28.245-.527.45-.766.667-2.525 2.306-5.408 3.89-8.768 4.651C12.012 59.117 3.382 55.79.89 47.302c-2.717-9.231.995-19.853 8.296-25.33a21.08 21.08 0 0 1 9.377-4.065c3.349-.54 6.55-.089 9.445 1.852.721.473 1.486.917 2.326 1.44Zm-10.126 23.56c.515-.067 1.04-.091 1.545-.206a8.03 8.03 0 0 0 4.488-2.794 8.079 8.079 0 0 0 1.789-4.987c.044-3.252-2.35-5.742-5.605-5.863-3.084-.105-5.353 1.297-6.994 3.822-.962 1.482-1.45 3.15-1.233 4.916.369 3.087 2.758 5.061 6.016 5.111h-.006ZM158.661 35.39c.347 2.017-.258 3.965-.876 5.882-2.216 6.871-6.718 11.706-13.216 14.698a22.094 22.094 0 0 1-7.332 1.87c-2.979.269-5.957.286-8.829-.644-6.569-2.12-10.711-6.497-11.675-13.462-1.18-8.513 2.007-15.35 8.495-20.722 3.351-2.77 7.286-4.356 11.541-5.016 5.633-.872 10.919.108 15.627 3.49 2.742 1.973 4.527 4.66 5.487 7.885.574 1.937 1.052 3.906.778 6.019Zm-14.007 1.59c.116-3.51-2.42-6.474-6.409-6.222-3.082.187-5.427 1.792-6.926 4.52a6.976 6.976 0 0 0-.528 5.771c.895 2.648 3.406 4.217 6.364 3.942 4.048-.378 7.639-4.074 7.499-8.01ZM91.802 44.591c-.171 1.39-.323 2.695-.498 3.995-.279 2.1-.575 4.199-.865 6.299-.023.185-.043.37-.078.554-.27 1.36-.531 1.59-1.872 1.578-1.671-.017-3.344 0-5.012-.1-2.352-.135-4.63-.623-6.7-1.838-2.472-1.454-3.878-3.646-4.002-6.517a35.621 35.621 0 0 1 .251-5.883c.71-5.726 1.52-11.452 2.312-17.165.686-4.96 1.405-9.913 2.1-14.87.283-2.007.547-4.018.806-6.026.013-.093.02-.185.033-.275.203-1.273.352-1.404 1.66-1.393 3.617.03 7.232.063 10.847.1 1.119.01 1.228.114 1.078 1.213-.308 2.252-.64 4.5-.957 6.751-.588 4.165-1.174 8.33-1.76 12.498l-1.939 13.87c-.195 1.398-.39 2.798-.576 4.198-.036.275-.052.551-.05.828 0 1 .493 1.72 1.445 1.987.53.125 1.073.19 1.617.196.692.024 1.385 0 2.16 0ZM68.813 2.995c-.106.922-.186 1.7-.289 2.48a8919.848 8919.848 0 0 1-2.138 15.034c-.654 4.616-1.304 9.233-1.95 13.852-.328 2.339-.654 4.68-.964 7.02a5.096 5.096 0 0 0 0 1.192c.129 1.228.806 1.885 2.051 1.955.649.039 1.305 0 1.954-.024.949-.02 1.208.207 1.098 1.125-.162 1.37-.386 2.734-.591 4.099-.29 1.91-.575 3.822-.886 5.73-.186 1.117-.468 1.357-1.573 1.405-1.426.062-2.855.184-4.277.147-2.53-.068-4.992-.514-7.258-1.717-3.284-1.747-5.009-4.444-4.824-8.16.114-2.293.373-4.584.667-6.866.425-3.377.932-6.745 1.406-10.119.593-4.223 1.187-8.445 1.782-12.666.533-3.827 1.063-7.656 1.588-11.486.088-.638.164-1.28.3-1.907.172-.79.465-1.028 1.26-1.122.217-.017.434-.022.651-.015l10.8.041 1.193.002ZM106.822 18.68h5.197c.247 0 .496-.01.743.012.67.058.833.186.766.875-.107 1.136-.282 2.265-.443 3.396-.594 4.123-1.191 8.246-1.791 12.37-.535 3.699-1.067 7.395-1.597 11.091-.449 3.147-.893 6.296-1.331 9.445-.126.914-.354 1.146-1.323 1.148-2.38 0-4.759-.011-7.14-.013-1.3 0-2.6.013-3.899.01-1.013 0-1.223-.201-1.114-1.217.186-1.503.42-2.996.633-4.492a137690.358 137690.358 0 0 1 2.419-16.961c.468-3.3.934-6.601 1.4-9.904.23-1.62.447-3.241.699-4.857.125-.79.227-.88 1.025-.887 1.916-.02 3.833 0 5.754 0l.002-.015ZM116.49 6.581a8.94 8.94 0 0 1-2.165 6 9.036 9.036 0 0 1-5.624 3.056c-1.856.249-3.573.02-5.092-1.037-2.205-1.53-3.008-3.753-2.82-6.334.288-4.166 3.828-7.712 8.175-8.206 2.305-.262 4.414.309 6.016 2.126 1.115 1.256 1.525 2.757 1.51 4.395Z"
        fill="#fff"
      />
    </Svg>
  );
}

export default memo(Logo);
