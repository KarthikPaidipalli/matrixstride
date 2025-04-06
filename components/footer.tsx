'use client';

import Image from 'next/image';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Email, Phone, LocationOn } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-300 px-6 py-12 mt-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content: Flex layout with spacing */}
        <div className="flex flex-wrap justify-between gap-y-10 gap-x-12 mb-12">
          
          {/* Logo and Description */}
          <div className="flex-1 min-w-[280px] max-w-sm space-y-6">
            <Image
              src="https://www.matrixstride.com/images/logo-footer.png"
              alt="MatrixStride Logo"
              width={180}
              height={80}
              className="mb-2"
            />
            <Typography variant="body2" className="text-gray-500 leading-relaxed">
              At MatrixStride, we specialize in delivering tailored engineering solutions that drive innovation and efficiency. 
              Our expert team transforms complex challenges into sustainable, cutting-edge solutions.
            </Typography>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[280px] max-w-sm space-y-6">
            <Typography variant="h6" className="text-black text-lg font-semibold">Contact Information</Typography>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Email className="text-blue-500 mt-0.5" />
                <div>
                  <Typography variant="body2" className="text-gray-500">Email us at:</Typography>
                  <a href="mailto:contact@matrixstride.com" className="text-blue-500 hover:text-blue-400 transition-colors">
                    contact@matrixstride.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-blue-500 mt-0.5" />
                <div>
                  <Typography variant="body2" className="text-gray-500">Call us at:</Typography>
                  <a href="tel:+919398037143" className="text-blue-500 hover:text-blue-400 transition-colors">
                    +91 939-803-7143
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Socials and Address */}
          <div className="flex-1 min-w-[280px] max-w-sm space-y-6">
            <div>
              <Typography variant="h6" className="text-black text-lg font-semibold mb-4">Follow Us</Typography>
              <Box className="flex gap-4">
                <IconButton href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-500">
                  <Facebook />
                </IconButton>
                <IconButton href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-500">
                  <Twitter />
                </IconButton>
                <IconButton href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-500">
                  <LinkedIn />
                </IconButton>
              </Box>
            </div>

            <div className="flex items-start gap-3">
              <LocationOn className="text-blue-500 mt-0.5" />
              <Typography variant="body2" className="text-gray-500 leading-relaxed">
                Uptown Cyberabad Building, Block-B, 4th Floor<br />
                100 Feet Road, Madhapur<br />
                Hyderabad, Telangana, India – 500081
              </Typography>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Typography variant="body2" className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Conseqta. All rights reserved.
          </Typography>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
