import React, { useState, useEffect } from 'react'

export const useImageLoader = (imageUrls: string[]) => {
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const loadImage = (url: string) => {
            return new Promise((resolve, reject) => {
                const img = new Image()
                img.onload = () => resolve(true)
                img.onerror = (error) => reject(error)
                img.src = url
            })
        }

        const loadImages = async () => {
            try {
                setLoading(true)
                await Promise.all(imageUrls.map((url) => loadImage(url)))
                setLoading(false)
            } catch (error) {
                console.error('Error loading images:', error)
            }
        }

        loadImages()

        // Cleanup function
        return () => {
            // Perform any cleanup if necessary
        }
    }, [ imageUrls ])

    return { loading }
}