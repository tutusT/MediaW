import { withRouter } from 'next/router'
import React, { Children } from 'react'
import Link from 'next/link'

export default withRouter(
  ({
    router,
    children,
    as,
    href,
    activeClassName,
    activeSubClassName,
    ...rest
  }) => {
    const child = Children.only(children)
    const childClassName = child.props.className || ''

    const sanitizedPath = router.asPath.split('#')[0].split('?')[0]

    const activeClass = activeClassName || 'menu__link--active'
    const activeSubClass = activeSubClassName || 'menu__link--active-sub'

    const activityClassName =
      sanitizedPath === href || sanitizedPath === as
        ? activeClass
        : sanitizedPath.startsWith(href + '/') ||
          sanitizedPath.startsWith(as + '/')
        ? activeSubClass
        : ''

    const className = `${childClassName} ${activityClassName}`.trim()
    return (
      <Link href={href} as={as} {...rest}>
        {React.cloneElement(child, {
          className: className || null,
        })}
      </Link>
    )
  },
)
