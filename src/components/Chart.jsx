import { useRef, useEffect } from 'react';

export function BarChart({ data, labels, colors, height = 250 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.height = height + 'px';

        const w = rect.width;
        const h = height;
        const padding = { top: 20, right: 20, bottom: 40, left: 50 };
        const chartW = w - padding.left - padding.right;
        const chartH = h - padding.top - padding.bottom;
        const maxVal = Math.max(...data, 1);

        ctx.clearRect(0, 0, w, h);

        // Grid lines
        ctx.strokeStyle = '#E5E7EB';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
            const y = padding.top + chartH - (chartH * i / 4);
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(w - padding.right, y);
            ctx.stroke();
            ctx.fillStyle = '#9CA3AF';
            ctx.font = '11px Inter, sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(Math.round(maxVal * i / 4), padding.left - 8, y + 4);
        }

        // Bars
        const barW = Math.min(40, (chartW / data.length) * 0.6);
        const gap = (chartW - barW * data.length) / (data.length + 1);

        data.forEach((val, i) => {
            const x = padding.left + gap + i * (barW + gap);
            const barH = (val / maxVal) * chartH;
            const y = padding.top + chartH - barH;

            // Bar with rounded top
            const radius = Math.min(4, barW / 2);
            ctx.fillStyle = colors?.[i] || '#2563EB';
            ctx.beginPath();
            ctx.moveTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.lineTo(x + barW - radius, y);
            ctx.quadraticCurveTo(x + barW, y, x + barW, y + radius);
            ctx.lineTo(x + barW, padding.top + chartH);
            ctx.lineTo(x, padding.top + chartH);
            ctx.closePath();
            ctx.fill();

            // Label
            ctx.fillStyle = '#6B7280';
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(labels?.[i] || '', x + barW / 2, h - padding.bottom + 16);

            // Value on top
            ctx.fillStyle = '#374151';
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.fillText(val, x + barW / 2, y - 6);
        });
    }, [data, labels, colors, height]);

    return (
        <div className="chart-container">
            <canvas ref={canvasRef} style={{ width: '100%' }} />
        </div>
    );
}

export function LineChart({ data, labels, height = 250, color = '#2563EB' }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.height = height + 'px';

        const w = rect.width;
        const h = height;
        const padding = { top: 20, right: 20, bottom: 40, left: 50 };
        const chartW = w - padding.left - padding.right;
        const chartH = h - padding.top - padding.bottom;
        const maxVal = Math.max(...data, 1);

        ctx.clearRect(0, 0, w, h);

        // Grid
        ctx.strokeStyle = '#E5E7EB';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
            const y = padding.top + chartH - (chartH * i / 4);
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(w - padding.right, y);
            ctx.stroke();
            ctx.fillStyle = '#9CA3AF';
            ctx.font = '11px Inter, sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(Math.round(maxVal * i / 4), padding.left - 8, y + 4);
        }

        if (data.length < 2) return;

        const step = chartW / (data.length - 1);
        const points = data.map((val, i) => ({
            x: padding.left + i * step,
            y: padding.top + chartH - (val / maxVal) * chartH,
        }));

        // Area fill
        ctx.beginPath();
        ctx.moveTo(points[0].x, padding.top + chartH);
        points.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.lineTo(points[points.length - 1].x, padding.top + chartH);
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
        grad.addColorStop(0, color + '33');
        grad.addColorStop(1, color + '05');
        ctx.fillStyle = grad;
        ctx.fill();

        // Line
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.lineJoin = 'round';
        points.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.stroke();

        // Dots & labels
        points.forEach((p, i) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.fillStyle = '#6B7280';
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(labels?.[i] || '', p.x, h - padding.bottom + 16);
        });
    }, [data, labels, height, color]);

    return (
        <div className="chart-container">
            <canvas ref={canvasRef} style={{ width: '100%' }} />
        </div>
    );
}
