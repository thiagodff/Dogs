import React from 'react'
import { Route as ReactDOMRoute, Navigate } from 'react-router-dom'
import { RouteProps as ReactDOMRouteProps } from 'react-router'

import { useAuth } from '../hooks/context/auth'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  children,
  ...rest
}) => {
  const { isSigned } = useAuth()

  return isPrivate ? (
    <ReactDOMRoute
      {...rest}
      element={isSigned ? <Component /> : <Navigate to="/login" />}
    >
      {children}
    </ReactDOMRoute>
  ) : (
    <ReactDOMRoute {...rest} element={<Component />}>
      {children}
    </ReactDOMRoute>
  )
}

export default Route
