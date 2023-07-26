import React from 'react'
import '@testing-library/jest-dom/extend-expect'

jest.mock('browser-image-compression', () => ({
    __esModule: true,
    default: () => {}
}))

